import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
        <li>
            <Link to="/user">User</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default Nav
