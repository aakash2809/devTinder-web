import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constant';

const Login = () => {
  const [emailId, serEmailId] = useState("Simaran@gmail.com");
  const [password, setPassword] = useState("Simran@123");
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(BASE_URL + "/login", {
        emailId,
        password
      }, { withCredentials: true })
      dispatch(addUser(res.data))
      console.log(res);
      return navigate("/")
    } catch (err) {
      setError(err?.response?.data?.message || 'something went wrong')
    }

  }
  return (
    <div className='flex justify-center my-10'>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label mb-1">
                <span className="label-text">Email Id</span>
              </div>
              <input
                type="text"
                value={emailId}
                className="input input-rounded rounded-md max-w-xs w-full mb-3"
                onChange={(e) => { serEmailId(e.target.value) }}
              />
            </label>
            <label className="form-control w-full max-w-xs ">
              <div className="label mb-1">
                <span className="label-text">Password</span>
              </div>
              <input
                type="text"
                value={password}
                className="input input-rounded rounded-md max-w-xs w-full"
                onChange={(e) => { setPassword(e.target.value) }}
              />
            </label>
          </div>
          <div className="card-actions justify-center m-2">
            <p className='text-red-500'>{error}</p>
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login