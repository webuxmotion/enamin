import useCounter from '../../hooks/useCounter';

const ElementC = () => {
  const [counter] = useCounter('ElementC');

  return (
      <div>ElementC: {counter}</div>
  ) 
}

export default ElementC;
