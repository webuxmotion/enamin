import { useContext, useEffect } from 'react';

import {  StateContext }  from '../../context/state.context';

const ElementB = () => {
  const [state, setState] = useContext(StateContext);

  useEffect(() => {
    setState({ ...state, target: 'setset' })
  }, [])

  return (
      <div>ElementB</div>
  ) 
}

export default ElementB;
