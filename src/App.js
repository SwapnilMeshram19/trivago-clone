import React from 'react'
import { Navbar } from './Components1/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import HotelMain from './components/hotel-card/HotelMain'
const App = () => {
  <>
  
  <Navbar />
  <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/main/:citylist' element={<HotelMain/>}></Route> 
  {/* <Route path='/HotelMain' element={<HotelMain/>}></Route> */}
  

  </Routes>
  
  </>
  
}

export default App