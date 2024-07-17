import "./App.css";
import ClassClick from "./components/ClassClick";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import FunctionClick from "./components/FunctionClick";
import Great from "./components/Great";
import Notifications from "./components/Notification";
import PropsExample from "./components/PropsExample";
import ParentCom from "./components/PureComponent/ParentCom";
import Shap from "./components/Shap/Shap";
import StateExample from "./components/StateExample";
import ParentComponent from "./components/useCallback/ParentComponent";
import Welcome from "./components/Welcome";

function App() {
  const Box_Data = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ];
  return (
    <div className="App">
      {/* <Great />
      <Welcome />
      <PropsExample name="Satish" />
      <StateExample />
      <FunctionClick />
      <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <Counter /> */}
      {/* <ClassCounter /> */}
      {/* <Shap data={Box_Data} /> */}
      {/* <Notifications /> */}
      {/* <ParentComponent /> */}
      <ParentCom />
    </div>
  );
}

export default App;
