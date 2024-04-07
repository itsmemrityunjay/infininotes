import React, { useEffect, useState } from "react";

export default function Count() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 10) {
          clearInterval(interval); // Pause interval when counter reaches 10
          return prevCounter; // Return the current counter value
        } else {
          return prevCounter + 1; // Increment the counter otherwise
        }
      });
    }, 100); // 1000 milliseconds for a one-second interval

    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array to run only once on mount

  return <div className="Count">{counter}+</div>;
}
