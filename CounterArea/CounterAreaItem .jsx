import React, { useEffect, useState } from "react";

const CounterAreaItem = ({ amount, info }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let currentCount = 0;
    const interval = setInterval(() => {
      if (currentCount < amount) {
        currentCount++;
        setCount(currentCount);
      } else {
        clearInterval(interval);
      }
    }, 200); // Adjust the speed if needed
    return () => clearInterval(interval);
  }, [amount]);

  return (
    <div className="counter-item">
      <span className="count">{count}</span>
      <p>
        {info[0]} <span>{info[1]}</span>
      </p>
    </div>
  );
};

export default CounterAreaItem;
