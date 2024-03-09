import Counter from './components/counter';

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="flex flex-col gap-10">
        <Counter />
        <Counter />
      </div>
    </div>
  );
}

export default App;
