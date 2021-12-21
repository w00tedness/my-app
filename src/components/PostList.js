import React, { Component } from 'react'
import axios from 'axios'
class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts: [],
       errorMsg: ''
    }
  }

  componentDidMount() { // similar to ngoninit
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      console.log(response.data)
      this.setState({posts: response.data})
    }).catch(e => {
      console.error(e)
      this.setState({errorMsg: 'oh shit boi there is an error'})
    })
  }
  
  render() {
    const { posts, errorMsg } = this.state

    return (
      <div>
				List of posts

        <ul>
        {posts.length
					? posts.map(post => <li key={post.id}>{post.title}</li>)
          : null}
        </ul>

        {errorMsg ? <div>{errorMsg}</div> : null}
			</div>
    )
  }
}

export default PostList
