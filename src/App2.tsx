import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import Navigation from "./components/Navigation";
import React, { useState } from "react";

interface DataPoint {
  name: string;
  value: number;
}

const App2 = () => {
  const [inputValue, setInputValue] = useState("");
  const [chartData, setChartData] = useState<DataPoint[]>([]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };

  const fetchData = async () => {
    try {
      // Make your API call here
      const response = await fetch(
        "https://dummy.restapiexample.com/api/v1/employees"
      );
      const data = await response.json();
      // Assuming your API response is an array of data points [{ name: string, value: number }]
      setChartData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <main className="w-full h-screen flex flex-row relative">
      <Navigation />

      <div className="flex flex-col p-10 ml-20 w-3/4 gap-5">
        <h1 className="text-4xl text-neutral-200">Data Insights</h1>

        <input
          placeholder="Enter something and press Enter..."
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="px-3 py-2 tracking-wide rounded-lg bg-neutral-600/40 text-neutral-100"
        />
        <div
          id="result"
          className="w-full h-600 border border-neutral-500/50 bg-neutral-800/20 rounded"
        >
          {chartData.length > 0 && (
            <AreaChart width={500} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          )}
        </div>
      </div>
    </main>
  );
};

export default App2;
