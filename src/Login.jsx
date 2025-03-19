import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {

  const[EmailId, setEmailId] = useState('');
  const[Password, setPassword] = useState('');

  const handleLogin = async () => {
   try {const res = axios.post('http://localhost:3001/login',{
      EmailId,
      Password,
    });}
    catch(err){
      console.log(err);
    }
  };

  return (
    <div className='flex justify-center my-4 '>
      <div className="card bg-base-200 w-96 shadow-xl ">
        <div className="card-body ">
         <h2 className="card-title justify-center">Login</h2>
         <div>
         <label className="form-control w-full max-w-xs ">
           <div className="label">
             <span className="label-text">Email ID</span>
            </div>

            <input type="text"
             value={EmailId}  
             className="input input-bordered w-full max-w-xs" 
             onChange={(e) => setEmailId(e.target.value)}
            />
          </label>

          <label className="form-control w-full max-w-xs py-2">
           <div className="label my-2">
             <span className="label-text">Password</span>
            </div>
            <input type="text" 
            value={Password}
            className="input input-bordered w-full max-w-xs -my-3 "
            onChange={(e)=>setPassword(e.target.value)}
           />
          </label>


        </div>
        <div className="card-actions justify-center my-3">
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div></div>
  );
};

export default Login;