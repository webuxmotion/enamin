import { useContext } from 'react';

import  { StateContext } from '../../context/state.context';

const UiParam = () => {
    const [state, setState] = useContext(StateContext);

    const handleSelectChange = (event) => {
        setState({ ...state, target: event.target.value });
    }

    const handleInputChange = (event) => {
        setState({ ...state, timer: { ...state.timer, interval: event.target.value } });
    }

    return (
        <div>
            UiParam
            <select value={state.target} onChange={handleSelectChange}>
                <option value="ElementA">ElementA</option>
                <option value="ElementB">ElementB</option>
                <option value="ElementC">ElementC</option>
            </select>
            <input value={state.timer.interval} onChange={handleInputChange} />
        </div>
    )
}

export default UiParam;