import React from 'react'

import Home from './components/Home'
import Header from './components/Header'
import Playlist from './components/Playlist'
import Slider from './components/Slider'
import Footer from './components/Footer'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    {/* <Route path='/' element={<Home/>}/> */}
    {/* <Route path='/' element={<Home/>}/> */}
    {/* <Route path='/' element={<Home/>}/> */}
    {/* <Route path='/' element={<Home/>}/> */}
    
      {/* <Route path='/login/' element={<Login/>}/>
      <Route path='/register/' element={<Register/>}/>

      <Route path='/create-room/' element={<CreateRoom/>}/>
      <Route path='/lobby/:lobbyCode' element={<Lobby/>}/>
      <Route path='/join-room/' element={<JoinRoom/>}/>

      <Route path='/menu/' element={<Menu/>}/>

      <Route path='/profile/' element={<Profile/>}/>

      <Route path='/quiz/:lobbyCode' element={<Quiz/>}/>

      <Route path='/winner/:lobbyCode' element={<Winner/>}/> */}
    </Routes> 
    </BrowserRouter>
  )
}

export default App