import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
       userId: '',
       title: '',
       body: ''
    }
  }

  changeHandler = (e) => {
    this.setState(
      {
        [e.target.name] : e.target.value
      }
    )
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then(response => {
        console.log(response)
      }).catch(e => {
        console.error(e)
      })
  }

  render() {
    const {userId, title, body} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label for='userId'> User Id </label>
          <input id='userId' type='text' name='userId' value={userId} onChange={this.changeHandler}/>

          <label for='title'> title </label>
          <input id='title' type='text' name='title' value={title}  onChange={this.changeHandler}/>

          <label for='body'> body </label>
          <input id='body' type='text' name='body' value={body}  onChange={this.changeHandler}/>

          <input type='submit' value='submit'/>
        </form>
        <hr></hr>
      </div>

    )
  }
}

export default PostForm
