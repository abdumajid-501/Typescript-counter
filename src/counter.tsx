import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="counter-container">
      <div className="author-name">Abdumajid Xolmatov</div>
      
      <h1 className="title">Counter</h1>
      <div className="display-value">{count}</div>
      
      <div className="buttons">
        <button className="btn minus" onClick={() => setCount(count - 1)}>-</button>
        <button className="btn reset" onClick={() => setCount(0)}>Reset</button>
        <button className="btn plus" onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;
