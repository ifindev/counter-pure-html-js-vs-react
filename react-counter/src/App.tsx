import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center h-screen gap-4 bg-gray-800 text-white font-bold text-xl">
      <button
        className="bg-gray-600 px-6 py-3 rounded active:bg-gray-700"
        onClick={() => setCount((prev) => prev - 1)}
      >
        -
      </button>
      <p>{count}</p>
      <button
        className="bg-gray-600 px-6 py-3 rounded active:bg-gray-700"
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
    </div>
  );
}

export default App;
