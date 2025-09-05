import React, { useEffect } from 'react'
import NavBar from './NavBar'
import {  useNavigate, Outlet } from 'react-router-dom'
import Footer from './Footer'
import { BASE_URL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import axios from 'axios';

const Body = () => {

  const dispatch = useDispatch()
   const navigate = useNavigate();
  const fetchUser = async() =>{
    try{
      const res = await axios.get(BASE_URL + '/profile/view', { withCredentials: true })
        dispatch(addUser(res.data))
        console.log()
    }catch(err){
      if(err.status === 401){
          navigate('/login')
      }else{
        console.log('=======>');
      }
  
      console.error('err--------------->',err)
    } 
  }

  useEffect(()=>{
      fetchUser();
      console.log('Component loaded');
    }, [])


  return (
    <div>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Body