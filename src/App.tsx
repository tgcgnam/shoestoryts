import GlobalState from "./utils/GlobalState";
import LayoutPage from "./components/layoutpage/LayoutPage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <GlobalState>
        <LayoutPage />
      </GlobalState>
    </div>
  );
}

export default App;
