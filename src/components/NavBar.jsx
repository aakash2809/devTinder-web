import React from 'react'
import { useSelector } from 'react-redux'
import appStore from '../utils/appStore'
import { Link } from 'react-router-dom'
const NavBar = () => {
  const user = useSelector(store => store.user)
  //console.log('---------->',user.photoUrl)
  return (
    <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <Link to ="/">👨‍💻 DevTinder</Link>
        </div>
        <div className="flex gap-2">
         
          {user && <div className="dropdown dropdown-end mx-5 flex">
            <p>Welcome {user.firstName}</p>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="user photo"
                  src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/">
                  Profile
                </Link>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>}
        </div>
      </div>
  )
}

export default NavBar