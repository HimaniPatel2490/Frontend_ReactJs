import React, { useState } from 'react';
import { Component } from 'react';


class Updateunmount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Component updated: Count changed to', this.state.count);
    }
  }

  componentWillUnmount() {
    console.log('Component is being unmounted.');
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <h2>Update and Unmount Example</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

function Compo() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
      <h1>Lifecycle Demo</h1>
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? 'Hide' : 'Show'} Component
      </button>
      {showComponent && <Updateunmount />}
    </div>
  );
}

export default Compo;