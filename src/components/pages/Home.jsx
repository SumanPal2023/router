import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Home = () => {
  let nav = useNavigate()
  return (
    <div>
     <h1>this is home page </h1>
     <Link to='/'>back</Link>
    </div>
  )
}

export default Home
