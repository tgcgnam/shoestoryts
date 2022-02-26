import GlobalState from "./globalState";
import LayoutPage from "./components/LayoutPage/LayoutPage";
import "./App.scss";


function App() {


  return (
    <div className="App">
      <GlobalState>
        <LayoutPage/>
      </GlobalState>
    </div>
  );
}

export default App;
