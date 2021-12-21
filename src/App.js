import React, { Component } from 'react'
// import './App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import Greet from './components/Greet'

class App extends Component {
	render() {
		return (
			<div className="App">
        <Greet />
				<PostForm />
				<PostList />
			</div>
		)
	}
}

export default App