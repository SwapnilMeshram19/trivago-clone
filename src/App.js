import React from 'react'
import { Home } from './Components1/Home'
import { Navbar } from './Components1/Navbar'
import { Routes,Route } from 'react-router-dom'
import HotelMain from './Components1/hotel-card/HotelMain'
const App = () => {
  return (
  <>
  <Navbar />
  <Routes>
  <Route path='/' element={<Home/>}></Route>
  {/* <Route path='/HotelMain' element={<HotelMain/>}></Route> */}
  

  </Routes>
  
  </>
  )
}

export default App