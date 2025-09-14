import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constant';

const Login = () => {
  const [emailId, serEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const res = await axios.post(BASE_URL + "/signup", {
        firstName,
        lastName,
        emailId,
        password
      }, { withCredentials: true })
      console.log(res.data.data)
      dispatch(addUser(res.data.data))
      return navigate("/profile")
    } catch (err) {
      setError(err?.response?.data?.message || 'something went wrong')
    }
  }
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
    <div className='flex justify-center my-10  pb-10'>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">{isLoginForm ? 'LogIn' : 'SignUp'}</h2>
          <div>
            {!isLoginForm && <>
              <label className="form-control w-full max-w-xs">
                <div className="label mb-1">
                  <span className="label-text">First Name</span>
                </div>
                <input
                  type="text"
                  value={firstName}
                  className="input input-rounded rounded-md max-w-xs w-full mb-3"
                  onChange={(e) => { setFirstName(e.target.value) }}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label mb-1">
                  <span className="label-text">Last Name</span>
                </div>
                <input
                  type="text"
                  value={lastName}
                  className="input input-rounded rounded-md max-w-xs w-full mb-3"
                  onChange={(e) => { setLastName(e.target.value) }}
                />
              </label>
            </>}
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
                type="password"
                value={password}
                className="input input-rounded rounded-md max-w-xs w-full"
                onChange={(e) => { setPassword(e.target.value) }}
              />
            </label>
          </div>
          <div className="card-actions flex-col items-center m-2 space-y-2">
            <p className='text-red-500'>{error}</p>
            <button className="m-auto btn btn-primary" onClick={isLoginForm ? handleLogin : handleSignUp}>{isLoginForm ? 'LogIn' : 'SignUp'}</button>
          </div>
          <p
            className='m-auto text-blue-500 underline cursor-pointer hover:text-blue-700 transition'
            onClick={() => setIsLoginForm((value) => !value)}>
            {isLoginForm ? 'New user? Sing up here' : 'Existing User? Login here'}
          </p>
        </div>
      </div>

    </div>
  )
}

export default Login