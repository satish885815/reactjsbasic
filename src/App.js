import React from "react";
import "./App.css";
import ClassClick from "./components/ClassClick";
import ClassCounter from "./components/ClassCounter";
import ComponentC from "./components/Context/ComponentC";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import FRParent from "./components/ForwordRef/FRParent";
import FunctionClick from "./components/FunctionClick";
import Great from "./components/Great";
import Notifications from "./components/Notification";
import PropsExample from "./components/PropsExample";
import ParentCom from "./components/PureComponent/ParentCom";
import InputRef from "./components/Ref/InputRef";
import Shap from "./components/Shap/Shap";
import StateExample from "./components/StateExample";
import ParentComponent from "./components/useCallback/ParentComponent";
import Welcome from "./components/Welcome";
import { UserProvider } from "./components/Context/userContex";
import ComponentHookC from "./components/ContextHook/ComponentHookC";
import UseMemo from "./components/UseMemo/UseMemo";
import CakeContainer from "./components/redux/CakeContainer";
import { Provider } from "react-redux";
import store from "./components/redux/Cake/store";

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
      <Shap data={Box_Data} />
      {/* <Notifications /> */}
      {/* <ParentComponent /> */}
      {/* <ParentCom /> */}
      {/* <InputRef /> */}
      {/* <FRParent /> */}
      {/* <UserProvider value="Satish">
        <ComponentC />
      </UserProvider> */}
      {/* <UserProvider value="Hello Guys">
        <ComponentHookC />
      </UserProvider> */}
      {/* <UseMemo /> */}
      {/* <Provider store={store}>
        <CakeContainer />
      </Provider> */}
    </div>
  );
}

export default App;
