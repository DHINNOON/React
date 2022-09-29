import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Dhins</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    // OR

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Dhins</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

    // OR

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Dhins</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // OR

    return this.state.isLoggedIn && <div>Welcome Dhins</div>;
  }
}

export default UserGreeting;
