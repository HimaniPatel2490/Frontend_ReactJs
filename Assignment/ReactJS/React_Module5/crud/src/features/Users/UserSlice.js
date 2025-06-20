import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const user = {
        id: nanoid(),
        name: action.payload.name,
        email: action.payload.email,
      };
      state.users.push(user);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.users.find(user => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
