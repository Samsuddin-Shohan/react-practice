import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
    <Counter></Counter>
    <Counter></Counter>
      
    </div>
  );
}
function Counter() {
  const [count, setCount]=useState(0);
  const handleIncrease = ()=>{
    let newCount = count+1;
    setCount(newCount);
  }
  const handleDecrease = ()=>{
    let newCount = count-1;
    setCount(newCount);
  }

  return (
    <div className="container">
      <h1>counter</h1>
      <button onClick={handleIncrease} className='button-style'>increase</button>  
      <button onClick={handleDecrease} className='button-style'>decrease</button>  
      <h4>count is {count}</h4>
    </div>
  );
}


export default App;
