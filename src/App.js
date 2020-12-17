import { StateContextProvider } from "./context/state.context";

import UiParam from './components/ui-param/ui-param';
import Timer from './components/timer/timer';
import Count from './components/count/count';

import elements from './constants/elements';

function App() {
  return (
    <div className="App">
      <StateContextProvider>
        <Timer />
        <UiParam />
        <Count name={elements.A} />
        <Count name={elements.B} />
        <Count name={elements.C} />
      </StateContextProvider>
    </div>
  );
}

export default App;
