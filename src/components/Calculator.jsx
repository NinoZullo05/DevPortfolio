import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const evaluatedResult = eval(input); 
      setResult(evaluatedResult);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
        Classic Calculator
      </h2>

      <div className="mb-4 bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-right">
        <div className="text-lg dark:text-white">{input || "0"}</div>
        {result !== null && (
          <div className="text-2xl font-bold dark:text-white">
            = {result}
          </div>
        )}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {["7", "8", "9", "/"].map((btn) => (
          <button
            key={btn}
            className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={() => handleButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
        {["4", "5", "6", "*"].map((btn) => (
          <button
            key={btn}
            className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={() => handleButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
        {["1", "2", "3", "-"].map((btn) => (
          <button
            key={btn}
            className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={() => handleButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
        {["0", "C", "=", "+"].map((btn) => (
          <button
            key={btn}
            className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={() => (btn === "C" ? handleClear() : btn === "=" ? handleCalculate() : handleButtonClick(btn))}
          >
            {btn}
          </button>
        ))}
      </div>

      <button
        onClick={handleDelete}
        className="mt-4 bg-red-500 text-white w-full p-2 rounded-lg hover:bg-red-600 transition duration-300"
      >
        Delete
      </button>
    </div>
  );
};

export default Calculator;
