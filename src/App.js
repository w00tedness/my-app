import React, { Component } from 'react'
// import './App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import Greet from './components/Greet'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'

class App extends Component {
	render() {
		return (
			<div className="App">
			<ClickCounter/>
			<HoverCounter/>
        {/* <Greet /> */}
				{/* <PostForm /> */}
				{/* <PostList /> */}
			</div>
		)
	}
}

export default App