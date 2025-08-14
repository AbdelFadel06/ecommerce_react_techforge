// import { useState } from 'react'
import LoginPage from './pages/Login'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <Router>
      

      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
