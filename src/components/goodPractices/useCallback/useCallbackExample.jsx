import { useCallback, useState } from "react";

const functionsCounter = new Set();

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);
  const incrementOtherCounter = useCallback(() => {
    setOtherCounter(otherCounter + 1);
  }, [otherCounter]);

  //   const increment = () => {
  //     setCount(count + 1);
  //   };
  //   const decrement = () => {
  //     setCount(count - 1);
  //   };
  //   const incrementOtherCounter = () => {
  //     setOtherCounter(otherCounter + 1);
  //   };

  functionsCounter.add(increment);
  functionsCounter.add(decrement);
  functionsCounter.add(incrementOtherCounter);

  console.log("Function instances = ", functionsCounter.size);

  return (
    <>
      <div>Count: {count}</div>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
    </>
  );
};
export default UseCallbackExample;
