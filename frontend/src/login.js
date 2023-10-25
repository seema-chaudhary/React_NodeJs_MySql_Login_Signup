import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Validation from './loginValidation'; 
import axios from 'axios';

function Login() {
    const[values, setValues] = useState({
        email:'',
        password:''
    })

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]:[e.target.value]}))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        setErrors(Validation(values));
        if( errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Success"){
                navigate('/home');
                }else{
                    alert("Invalid Email or Password");
                }
            })
            .catch(err => console.log(err));
        }
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100' >
    <div className='bg-white p-3 rounded w-25' >
    <h2>Login</h2>
     <form action=''onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" id="email" name="email" placeholder='Enter Email' className='form-control rounded-0' onChange={handleInput} />
           {errors.email &&  <span className='text-danger'>{errors.email}</span>}
        </div>
        <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" id="password" name="password" placeholder='Enter Password' className='form-control rounded-0' onChange={handleInput} />
            {errors.password &&  <span className='text-danger'>{errors.password}</span>}
        </div>
        <button className='btn btn-success w-100 rounded-0' type='submit'><strong>Login</strong></button>
        <p>You are agree to our terms and condition? </p>
        <Link to='/Signup' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none' type='submit'><strong>Sign-Up</strong></Link> 
     </form>
     </div>
    </div>
  );
}

export default Login;
