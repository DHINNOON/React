import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Message /> */}
      <Greet name="DS" nickName="coup">
        <p>This is children</p>
      </Greet>
      <Greet name="Noon" nickName="Mil">
        <button>Action</button>
      </Greet>
      <Greet name="DHINS" nickName="Ahmed"></Greet>
      {/*<Welcome name="DS" nickName="coup" />
      <Hello /> */}
    </div>
  );
}

export default App;
