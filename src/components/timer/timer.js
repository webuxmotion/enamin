import { useEffect, useContext } from 'react';

import  { StateContext } from '../../context/state.context';

const Timer = () => {
    const [state, setState] = useContext(StateContext);

    useEffect(() => {
        const id = setTimeout(() => {
            setState(prev => (
                { ...prev, timer: { ...prev.timer, tick: !prev.timer.tick, counter: prev.timer.counter + 1 }}
            ))
        }, state.timer.interval);
      
        return () => clearTimeout(id);
      }, [state.timer.tick, setState]);

    return <>timeout: {state.timer.interval}</>
}

export default Timer;