import React from 'react'

import Home from './components/Home'
import Music from './components/Music'
import Header from './components/Header'
import Playlist from './components/Playlist'
import Slider from './components/Slider'
import Footer from './components/Footer'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/music' element={<Music/>}/>
    {/* <Route path='/login' element={<Login/>}/> */}
    </Routes> 
    </BrowserRouter>
  )
}

export default App