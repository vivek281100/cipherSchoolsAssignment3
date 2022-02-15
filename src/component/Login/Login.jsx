import React, { useState } from 'react';
import './Login.css';

const Login = () =>{ 

    const [userLogin , setUserLogin] = useState({
        username:"",
        passward:"",
    });
    const [records , setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserLogin({...userLogin, [name] : value})
    }
    const handleSubmit= (e) => {
        e.preventDefault();

        const newRecord = {...userLogin , id: new Date().getTime().toString()}
        setRecords([...records,newRecord]);
        console.log(newRecord)
        setUserLogin({username:"" , passward:""})
    }
    return (
        <>
        <div className='oouterbody'>
        <div className='body1'>
        <header>
            <h1>LOG-IN</h1>
        </header>
        <hr/>
        <form action='' onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username : </label>
                <input type="text"  autoComplete='off'
                value={userLogin.username}   onChange={handleInput}
                name='username' id='userName'/>
            </div>
            <div>
                <label htmlFor='passward'>Passward : </label>
                <input type="text" 
                value={userLogin.passward}   onChange={handleInput}
                name='passward' id='passward'/>
            </div>
            <button type='submit'>Login </button>

        </form>    
          </div>
          </div>
         </>
    )
}

export default Login;