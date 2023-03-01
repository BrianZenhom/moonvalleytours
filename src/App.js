import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../src/app.css'
import Home from './Components/index.js'



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
