import './App.css';
import MainPanel from "./components/MainPanel";
import './assets/styles/nodes.css'
import {ReactFlowProvider} from "react-flow-renderer/nocss";

function App() {
  return (
    <div className="App">
      <ReactFlowProvider>
      <MainPanel/>
      </ReactFlowProvider>
    </div>
  );
}

export default App;
