import Counter from "./Counter";

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      /> */}
      <div>
        <Counter>
          <Counter.Label>Compund Component Pattern Counter</Counter.Label>
          <Counter.Increase icon="+" />
          <Counter.Value />
          <Counter.Decrease icon="-" />
        </Counter>
      </div>
      <Counter>
        <Counter.Increase icon="+" />
        <Counter.Value />
        <Counter.Decrease icon="-" />
      </Counter>
    </div>
  );
}
