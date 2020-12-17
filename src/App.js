import './App.css';
import { StateContextProvider } from "./context/state.context";

import UiParam from './components/ui-param/ui-param';
import ElementA from './components/element-a/element-a';
import ElementB from './components/element-b/element-b';
import ElementC from './components/element-c/element-c';
import Timer from './components/timer/timer';

function App() {
  return (
    <div className="App">
      <StateContextProvider>
        <Timer />
        <UiParam />
        <ElementA />
        <ElementB />
        <ElementC />
      </StateContextProvider>
    </div>
  );
}

export default App;
