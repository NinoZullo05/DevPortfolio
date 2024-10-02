import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculateSum = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        className="border p-2"
        placeholder="First number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        className="ml-2 border p-2"
        placeholder="Second number"
      />
      <button
        onClick={calculateSum}
        className="ml-2 p-2 bg-light-purple dark:bg-dark-purple text-white"
      >
        Calculate
      </button>
      {result !== null && <p className="mt-4">Result: {result}</p>}
    </div>
  );
};

export default Calculator;
