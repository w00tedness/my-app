import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
       username: '',
       comments: '',
       topic: 'react'
    }
  }

  handleUserNameChange = (event) => {
    console.log(event.target.value)
    this.setState({
      username: event.target.value
    })
  }

  handleCommentsChange = (event) => {
    console.log(event.target.value)
    this.setState({
      comments: event.target.value
    })
  }

  handleTopicChange = (event) => {
    console.log(event.target.value)
    this.setState({
      topic: event.target.value
    })
  }

  handleSubmit = (event) => {
    alert(`${this.state.comments} ${this.state.topic} ${this.state.username} `)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>username</label>
          <input type='text' value={this.state.username} onChange={this.handleUserNameChange}></input>
        </div>
        <div>
          <label> comments</label>
          <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
          <label>topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value='react'>react</option>
            <option value='angular'>angular</option>
            <option value='vue'>vue</option>
          </select>
        </div>
        <input type='submit'></input>
      </form>
    )
  }
}

export default Form;
