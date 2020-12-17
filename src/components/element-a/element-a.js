import { useContext, useEffect } from 'react';

import  {  StateContext } from '../../context/state.context';

const ElementA = () => {
  const state = useContext(StateContext);

  useEffect(() => {
    console.log(state);
  }, [state])

  return (
      <div>ElementA</div>
  ) 
}

export default ElementA;
