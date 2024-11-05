import React from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {
  let nav =useNavigate()
  return (
    <div>
   <h1>   this is About page</h1>
   <button  onClick={()=>{
    nav('/')
   }}>back</button>
    </div>
  )
}

export default About
