import React, { Component } from 'react';

export class ClassCompo extends Component {
  render() {
    return <h1>Class Componenet</h1>;
  }
}

class Task extends Component {
  render() {
    return (
      <div>
        <ClassCompo/>
      </div>
    );
  }
}

export default Task;



