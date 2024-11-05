
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/nav/Nav'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import User from './components/pages/User'
import NotFound from './components/pages/NotFound'

function App() {

  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Nav/>}/>
      <Route path='/' element={<Home/>}/>

      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
