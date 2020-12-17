import { StateContextProvider } from "./context/state.context";

import elements from './constants/elements';
import { Timer, UiParam, Count } from './components';

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
