function increase() {
  this.count++;
}

function decrease() {
  this.count--;
}

export function counterStore() {
  return {
    count: 0,
    increase,
    decrease,
  };
}

export const CounterView = ({ state }) => {
  return (
    <div>
      <button onClick={() => state.decrease()}>-</button>
      <span>{state.count}</span>
      <button onClick={() => state.increase()}>+</button>
    </div>
  );
};

