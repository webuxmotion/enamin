import useCounter from '../../hooks/useCounter';

const ElementB = () => {
  const [counter] = useCounter('ElementB');

  return (
      <div>ElementB: {counter}</div>
  ) 
}

export default ElementB;
