// Auth.jsx
import React from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../Firebase";

const Auth = ({ user, setUser }) => {
  const login = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  const logout = () => {
    signOut(auth);
    setUser(null);
  };

  return user ? (
    <div>
      <p>Welcome, {user.displayName}</p>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <button onClick={login}>Sign in with Google</button>
  );
};

export default Auth;
