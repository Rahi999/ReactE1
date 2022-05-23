import React, { useState} from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  // let count = 0;
  
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=> setCount(count+1)}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={()=> setCount(count+1)}>-</button>
    </div>
  );
};

export default Counter;
