import "./App.css";
import Great from "./components/Great";
import PropsExample from "./components/PropsExample";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Great />
      <Welcome />
      <PropsExample name="Satish" />
    </div>
  );
}

export default App;
