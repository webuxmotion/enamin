import { StateContextProvider } from "./context/state.context";

import UiParam from './components/ui-param/ui-param';
import Timer from './components/timer/timer';
import Count from './components/count/count';

function App() {
  return (
    <div className="App">
      <StateContextProvider>
        <Timer />
        <UiParam />
        <Count name="ElementA" />
        <Count name="ElementB" />
        <Count name="ElementC" />
      </StateContextProvider>
    </div>
  );
}

export default App;
