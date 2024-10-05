import React, { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";

const Converter = () => {
  const [inputValue, setInputValue] = useState("");
  const [convertedValue, setConvertedValue] = useState(null);
  const [conversionType, setConversionType] = useState("currency");
  const [conversionUnit, setConversionUnit] = useState("USDToEUR");
  const [rates, setRates] = useState(null);
  const [error, setError] = useState(null);

  const fetchExchangeRates = async () => {
    const API_URL = `${process.env.REACT_APP_API_BASE_URL}/${process.env.REACT_APP_EXCHANGE_RATE_API_KEY}/latest/USD`;
  
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        const errorResponse = await response.text(); 
        console.error("Error response:", errorResponse);
        throw new Error("Failed to fetch exchange rates");
      }
      const data = await response.json();
      console.log("Conversion rates:", data.conversion_rates);
      setRates(data.conversion_rates);
    } catch (err) {
      console.error("Error fetching exchange rates:", err.message);
      setError(err.message);
    }
  };

  const handleConvert = () => {
    if (conversionType === "currency" && rates) {
      const currency = conversionUnit.slice(3);
      const rate = rates[currency];
      if (rate) {
        const converted = parseFloat(inputValue) * rate;
        setConvertedValue(converted.toFixed(2));
      } else {
        setError("Currency conversion rate not available.");
      }
    }
  };

  const handleConversionTypeChange = (e) => {
    setConversionType(e.target.value);
    setConversionUnit("USDToEUR");
  };

  useEffect(() => {
    if (conversionType === "currency") {
      fetchExchangeRates();
    }
  }, [conversionType]);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Converter</h2>

      <div className="flex flex-col space-y-4">
        <select
          value={conversionType}
          onChange={handleConversionTypeChange}
          className="border border-gray-300 dark:border-gray-600 p-2 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        >
          <option value="currency">Currency</option>
        </select>

        <select
          value={conversionUnit}
          onChange={(e) => setConversionUnit(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 p-2 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        >
          <option value="USDToEUR">USD to EUR</option>
          <option value="EURToUSD">EUR to USD</option>
        </select>

        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 p-2 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          placeholder="Enter value"
        />

        <button
          onClick={handleConvert}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center justify-center"
        >
          <RefreshCw size={20} className="mr-2" /> Convert
        </button>

        {convertedValue !== null && (
          <p className="text-center mt-4">
            Converted Value: <span className="font-bold">{convertedValue}</span>
          </p>
        )}

        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Converter;
