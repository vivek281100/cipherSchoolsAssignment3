import React,{useState} from 'react';
import './App.css';
import { Redirect, } from 'react-router';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
//import Login from './component/Login/Login';
//import Register from './component/Register/Register';

function App() {
  const [auth,setAuth] = useState(false);
  if(auth){
    return <Redirect to='/foodrecipeeDashboard' />
  }
  return (
    <div className="App">
      <Login/>
      <Register/>
      <button type='text' onClick={() => setAuth(true)}>Log-in</button>
    </div>
  );
}

export default App;
