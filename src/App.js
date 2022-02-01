import React, { Component } from 'react'
import NameList from './components/NameList'
import UserGreeting from './components/UserGreeting'
// import './App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import Form from './components/Form'
// import Greet from './components/Greet'
// import ClickCounter from './components/ClickCounter'
// import HoverCounter from './components/HoverCounter'
// import LifeCycleA from './components/LifeCycleA'
// import ThemedButton from './components/themed-button';
// import { Toolbar } from './components/Toolbar';
// import {ThemeContext, themes} from './components/theme-context';
// import ThemedButton from './components/themed-button';
// import CustomTextInput from './components/CustomTextInput'
class App extends Component {
	// constructor(props) {
  //   super(props);
  //   this.state = {
  //     theme: themes.light,
  //   };

  //   this.toggleTheme = () => {
  //     this.setState(state => ({
  //       theme:
  //         state.theme === themes.dark
  //           ? themes.light
  //           : themes.dark,
  //     }));
  //   };
  // }

	render() {
		return (
			<div className="App">
			{/* <LifeCycleA/> */}
			{/* <ClickCounter/> */}
			{/* <HoverCounter/> */}
        {/* <Greet /> */}
				{/* <PostForm />
				<PostList /> */}
				{/* <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <section>
          <ThemedButton />
        </section> */}

				{/* <CustomTextInput/> */}
        {/* <UserGreeting/> */}
        {/* <NameList/> */}
        <Form/>
			</div>
		)
	}
}

export default App