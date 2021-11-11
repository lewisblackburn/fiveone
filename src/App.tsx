import React from 'react';

const Minimise = () => window.Main.minimise();
const Close = () => window.Main.close();

function App() {
  return (
    <div className="w-full min-h-screen">
      <header className="flex space-x-3 px-3 py-2 mt-20">
        <button onClick={() => Close()}>x</button>
        <button onClick={() => Minimise()}>-</button>
        <button className="disabled:opacity-50" disabled>
          /
        </button>
      </header>
    </div>
  );
}

export default App;
