import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users,setUsers]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[]);
  return (
    <div className="App">
    <Counter></Counter>
    <Counter></Counter>

    {
      users.map(user => <User name = {user.name} email = {user.email}></User> )
    }
      
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

function User(props){
  return(
    <div className='container'>
      <h1>Name: {props.name}</h1>
      <h4>Email: {props.email}</h4>
    </div>
  );
}


export default App;
