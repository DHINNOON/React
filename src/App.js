import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";

import React, { Component } from "react";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
{
  /* <ErrorBoundary>
<Hero heroName="Batman" />
</ErrorBoundary>

<ErrorBoundary>
<Hero heroName="joker" />
</ErrorBoundary> */
}
//        <PortalDemo />
//        <FRParentInput />
//        <FocusInput />
//        <RefsDemo />
//        <ParentComp />
//        <Table />
//       <FragmentDemo />
//        <LifeCycleA />
//        <Form />
//       <h1 className="error">Error</h1>
//       <h1 className={styles.success}>Success</h1>
//       <Inline></Inline>
//       <StyleSheet primary={true} />
//       <NameList />
//       <UserGreeting />
//       <ParentComponent />
//       <EventBind />
//       <FunctionClick />
//       <ClassClick />
//       <Counter />
//       <Message />
//       <Greet name="DS" nickName="coup">
//         <p>This is children</p>
//       </Greet>
//       <Greet name="Noon" nickName="Mil">
//         <button>Action</button>
//       </Greet>
//       <Greet name="DHINS" nickName="Ahmed"></Greet>
//       <Welcome name="DS" nickName="coup" />
//       <Hello /> */}
//     </div>
//   );
// }
// export default App;
