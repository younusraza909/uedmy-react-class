import { createContext, useContext, useState } from "react";

const CounterProvider = createContext();

function Counter({ children }) {
  const [count, setCount] = useState(0);

  const increaseCounterHandler = () => {
    setCount((count) => count + 1);
  };

  const decreaseCounterHandler = () => {
    setCount((count) => count - 1);
  };

  return (
    <CounterProvider.Provider
      value={{ count, increaseCounterHandler, decreaseCounterHandler }}
    >
      {children}
    </CounterProvider.Provider>
  );
}

function Label({ children }) {
  return <span>{children}</span>;
}

function Increase({ icon }) {
  const { increaseCounterHandler } = useContext(CounterProvider);
  return <button onClick={increaseCounterHandler}>{icon}</button>;
}

function Value() {
  const { count } = useContext(CounterProvider);
  return <span>{count}</span>;
}

function Decrease({ icon }) {
  const { decreaseCounterHandler } = useContext(CounterProvider);
  return <button onClick={decreaseCounterHandler}>{icon}</button>;
}

// Adding other component as property
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Value = Value;
Counter.Decrease = Decrease;

export default Counter;
