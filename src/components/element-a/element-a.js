import useCounter from '../../hooks/useCounter';

const ElementA = () => {
  const [counter] = useCounter('ElementA');

  return (
      <div>ElementA: {counter}</div>
  ) 
}

export default ElementA;
