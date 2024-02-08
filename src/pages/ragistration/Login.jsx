import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/firebaseConfig';

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const signin = async () => {
        if(email === "" || password === ""){
            return alert("Please fill all fields")
        }
        try {
            const users = await signInWithEmailAndPassword(auth, email, password);

            const user = localStorage.setItem('user', JSON.stringify(users));
            alert("Login Successfully");
            navigate('/');
            setEmail("");
            setPassword("");
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-gray-800 px-10 py-10 rounded-xl'>
        <div>
            <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
        </div>
        <div>
            <input type="email" 
                name="email" 
                placeholder='Email' 
                className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
        </div>
        <div>
            <input type="password" 
                name="email" 
                placeholder='Password' 
                className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
        </div>
        <div className='flex justify-center mb-3'>
            <button onClick={signin} className='bg-yellow-500 w-full text-black font-bold px-2 py-2 rounded-lg'>
                Login
            </button>
        </div>

        <div>
            <h2 className='text-white'>Don't have an account <Link to={'/signup'} className='text-yellow-500 font-bold'> Sign Up</Link> </h2>
        </div>
      </div>
    </div>
  )
}

export default Login
