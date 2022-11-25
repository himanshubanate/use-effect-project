// import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import MyComponent from "./MyComponent";
import User from "./User";

function App() {
  return (
    <div className="App">
      <User name="Him" />
      <MyComponent />
      <Counter />
    </div>
  );
}

export default App;
