import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }

  render() {

    return (
      this.state.isLoggedIn ? (<p> sup dude </p>) : (<p> sup guest </p>)
    );
    // let message
    // if (this.state.isLoggedIn) {
    //   message = <p> sup dude </p>
    // } else {
    //   message = <p> sup guest </p>
    // }

    // return <div>{message}</div>
  }
}

export default UserGreeting;
