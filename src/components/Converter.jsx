import React, { useState } from "react";

const Converter = () => {
  const [inputValue, setInputValue] = useState("");
  const [convertedValue, setConvertedValue] = useState(null);

  const handleConvert = () => {
    const converted = parseFloat(inputValue) * 2; // Example conversion logic
    setConvertedValue(converted);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Converter</h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border p-2"
        placeholder="Enter value"
      />
      <button
        onClick={handleConvert}
        className="ml-2 p-2 bg-light-purple dark:bg-dark-purple text-white"
      >
        Convert
      </button>
      {convertedValue !== null && (
        <p className="mt-4">Converted Value: {convertedValue}</p>
      )}
    </div>
  );
};

export default Converter;
