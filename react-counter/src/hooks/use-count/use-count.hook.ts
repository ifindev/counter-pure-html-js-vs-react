import { useState } from 'react';

export default function useCount(defaultValue?: number) {
  // #region INTERNAL STATE
  const [count, setCount] = useState(defaultValue || 0);
  // #endregion

  // #region HANDLERS
  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  const handleSub = () => {
    setCount((prev) => prev - 1);
  };
  // #endregion

  return { count, handleAdd, handleSub };
}
