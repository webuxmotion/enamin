import { useContext, useEffect, useState } from 'react';

import { StateContext } from '../../context/state.context';

const ElementA = () => {
  const [counter, setCounter] = useState(0);
  const [state] = useContext(StateContext);

  useEffect(() => {
    if (state.target === 'ElementA') {
      if (state.timer.counter !== 0) {
        setCounter(prev => prev + 1);
      }
    }
  }, [state.timer.tick]);

  return (
      <div>ElementA: {counter}</div>
  ) 
}

export default ElementA;
