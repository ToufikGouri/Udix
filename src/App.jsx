import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home/> } />
        </Routes>
      </Router>
    </>
  )
}

export default App

// FONTS:
// Headlines: Montserrat
// Text : Raleway

// COLORS:
// Blue: #381DDB         Hover: #84C4FF
// Red: #FC5252          Hover: #FFA3A3
// Light Red: #FFA3A3    Hover: #FC5252
// Black: #222222        Hover: #888888