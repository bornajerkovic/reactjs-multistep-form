import React, { Component } from "react";

class MultiStepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0 // initial state
    };
  }

  handleClick() {
    // Update the count state variable using setState
    if (this.state.step === 3) {
      console.log("completed");
    } else {
      this.setState({
        step: this.state.step + 1
      });
    }
  }

  handleSubmit() {
    alert("submitted");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.step === 0 && (
          <div>
            <input type="text" placeholder="Enter your name" />
            <button onClick={this.handleClick.bind(this)}>Next</button>
          </div>
        )}
        {this.state.step === 1 && (
          <div>
            <input type="text" placeholder="Enter your email address" />
            <button onClick={this.handleClick.bind(this)}>Next</button>
          </div>
        )}
        {this.state.step === 2 && (
          <div>
            <input type="text" placeholder="Enter your age" />
            <input type="submit" />
          </div>
        )}
      </form>
    );
  }
}

export default MultiStepForm;
