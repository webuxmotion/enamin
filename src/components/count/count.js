import useCounter from '../../hooks/useCounter';

const Count = ({ name }) => {
    const [counter] = useCounter(name);

    return (
        <div>{name}: {counter}</div>
    ) 
}

export default Count;