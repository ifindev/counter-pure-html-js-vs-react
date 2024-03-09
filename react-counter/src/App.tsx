import { useState } from 'react';
import Button from './components/button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center h-screen gap-4 bg-gray-800 text-white font-bold text-xl">
      <Button onClick={() => setCount((prev) => prev - 1)}>-</Button>
      <p>{count}</p>
      <Button onClick={() => setCount((prev) => prev + 1)}>+</Button>
    </div>
  );
}

export default App;
