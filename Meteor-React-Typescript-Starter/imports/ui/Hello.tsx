import * as React from 'react';

export default class Hello extends React.Component<any, { counter: number }> {
  public state = {
    counter: 0,
  };

  public render() {
    return (
      <div>
        <button onClick={this.increment}>Click Me</button>
        <p>You've pressed the button {this.state.counter} times.</p>
      </div>
    );
  }

  private increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }
}
