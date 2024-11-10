import React, { useEffect, useState } from "react";
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
import Main from "./components/InfiniteScroller/Main";
import MyComponent from "./components/MyComponet";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import GridSelector from "./components/Grid/GridSelector";
import Pagination from "./components/Pagination/Pagination";
import SearchUI from "./components/Search/SearchUI";

function App() {
  const Box_Data = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ];

  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((preValue) => {
        return preValue + 1;
      });
    }, 100);
  }, []);
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
      {/* <Main /> */}
      {/* <MyComponent /> */}
      {/* <ImageSlider /> */}
      {/* <div>
        <ProgressBar
          value={value}
          onComplete={() => {
            setSuccess(true);
          }}
        />
        <span>{success ? "Completed" : "Loading..."}</span>
      </div> */}
      {/* <GridSelector /> */}
      {/* <StopWatch /> */}
      {/* <ReducerCounter /> */}
      {/* <Pagination /> */}
      <SearchUI />
    </div>
  );
}

export default App;
