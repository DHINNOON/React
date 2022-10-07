import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Dhins",
    };
    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifeCA getSnap");
    return null;
  }

  componentDidUpdate() {
    console.log("LIFEA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "AHmed",
    });
  };

  render() {
    console.log("LifeCycleA render");

    return (
      <div>
        <div>LifeCycle A</div>
        <button onChange={this.changeState}>Change state</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
