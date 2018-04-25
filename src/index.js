import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => {
  return (
    <div>
      <HelloToSomeone someone="everyone" />
      <NameInput msg="Enter your name below to read this post again!" />
    </div>
  )
}

const HelloToSomeone = (props) => {
  return <h1> hello {props.someone}, welcome to my blog!</h1>
}

class NameInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: "Read my first blog post!"
    }
  }

  handleNameInputChange = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h2>Blog Post 1: Becoming a Web Developer</h2>
        <p>This is my journey on becoming a programmer.</p>
        <p>I started my career after graduation in digital marketing.</p>
        <p>From there, I learned HTML / CSS and started to like coding.</p>
        <p>I want to advance in my career by becoming a programmer, so I signed up for classes</p>
        <p>Now I am learning how to write functions</p>
        <p>{this.state.msg}</p>
        <p>{this.props.msg}</p>

        <form onSubmit={this.handleSumbit}>
        <label>
        Full name:
        <input type="text" value={this.state.NameInput} onChange={this.handleNameInputChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

