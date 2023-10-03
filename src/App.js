import "./App.css";
import ClassClick from "./components/ClassClick";
import FunctionClick from "./components/FunctionClick";
import Great from "./components/Great";
import PropsExample from "./components/PropsExample";
import StateExample from "./components/StateExample";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      {/* <Great />
      <Welcome />
      <PropsExample name="Satish" />
      <StateExample /> */}
      <FunctionClick />
      <ClassClick />
    </div>
  );
}

export default App;
