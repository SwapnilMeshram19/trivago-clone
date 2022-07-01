
import React from 'react'
// import './App.css';
import { Footer } from './Components1/Footer'
import { Navbar } from './Components1/Navbar'
import { Routes,Route } from 'react-router-dom'
import { Cars } from './Components1/Cars'
import { Stays } from './Components1/Stays'
import { Flights } from './Components1/Flights'
import { Packages } from './Components1/Packages'
import { Login } from './Components1/Login'
import {Recently} from './Components1/Recently'
import { BookingOverview } from './Components1/BookingOverview'
import { HelpandSupport } from './Components1/HelpandSupport'
import { Sliders } from './Components1/SlidersImages'



function App() {
  return (
    <div className="App">
     
    
     <Navbar />
     <Routes>
     {/* <Route path = "#" element = {logo}></Route> */}
      <Route path = "Stays" element = {<Stays/>}></Route>
      <Route path = "Cars" element = {<Cars/>}></Route>
      <Route path = "Flights" element = {<Flights/>}></Route>
      <Route path = "Packages" element = {<Packages/>}></Route>
      <Route path = "login" element = {<Login/>}></Route>
      <Route path = "Recently" element = {<Recently/>}></Route>
      <Route path = "HelpandSupport" element = {<HelpandSupport/>}></Route>
      <Route path = "BookingOverview" element = {<BookingOverview/>}></Route>

       </Routes>
       
       <div> <Sliders/> </div>

      <div><Footer /></div>

      

    </div>
  );
}

export default App;
