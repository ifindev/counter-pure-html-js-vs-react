import useCount from '../hooks/use-count/use-count.hook';
import Button from './button';

export default function Counter() {
  const { count, handleAdd, handleSub } = useCount();

  return (
    <div className="flex items-center gap-4 text-white font-bold text-xl">
      <Button onClick={handleAdd}>-</Button>
      <p>{count}</p>
      <Button onClick={handleSub}>+</Button>
    </div>
  );
}
