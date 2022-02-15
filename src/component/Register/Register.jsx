import React, { useState } from 'react';
import './Register.css';
const Register = () =>{ 

    const [userRegis , setUserRegis] = useState({
        username:"",
        Email:"",
        passward:"",
        Repassward:""
    });
    const [records , setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserRegis({...userRegis, [name] : value})
    }
    const handleSubmit= (e) => {
        e.preventDefault();

        const newRecord = {...userRegis , id: new Date().getTime().toString()}
        setRecords([...records,newRecord]);
        console.log(newRecord)
        setUserRegis({username:"" , Email:"",passward:"",Repassward:""})
    }
    return (
        <>
        <div className='body'>
        <header>
            <h1>SIGN-UP</h1>
        </header>
        <form action='' onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username&nbsp;&nbsp; : </label>
                <input type="text"  autoComplete='off'
                value={userRegis.username}   onChange={handleInput}
                name='username' id='userName'/>
            </div>
            <div>
                <label htmlFor='Email'>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  : </label>
                <input type="text" autoComplete='off'
                value={userRegis.Email}   onChange={handleInput}
                name='Email' id='Email'/>
            </div>
            <div>
                <label htmlFor='passward'>Passward&nbsp;&nbsp;&nbsp;&nbsp; : </label>
                <input type="text" autoComplete='off'
                value={userRegis.passward}   onChange={handleInput}
                name='passward' id='passward'/>
            </div><div>
                <label htmlFor='Repassward'>Repassward  : </label>
                <input type="text" autoComplete='off'
                value={userRegis.Repassward}   onChange={handleInput}
                name='Repassward' id='Repassward'/>
            </div>
            <button type='submit'>Sign-up</button>

        </form>    
        </div>  
         </>
    )
}
export default Register;