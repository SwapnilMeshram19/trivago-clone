import React from 'react'
import { Link } from 'react-router-dom'
// import styled from 'styled-components'
import { DropDown } from './DropDown'
import './NavbarFooter.css';


 function Navbar(){
    return(
        <>
    
        <div className='navbar'>
            <div className='navbar1'>
         <Link to = "#" ><img style ={{width:100,marginTop:-40,marginRight:190,marginLeft:-100}} src = "https://imgcy.trivago.com/f_auto,q_auto/hardcodedimages/logo_fb.png"/></Link>
         <span  style = {{marginRight:-13}}class="material-symbols-outlined">king_bed</span>
        <Link to = "Stays" style = {{color:'black'}}>Stays</Link>
        <span  style = {{marginRight:-13}} class="material-symbols-outlined">electric_car</span>
        <Link to = "Cars" style = {{color:'black'}}>Cars</Link>
        <span  style = {{marginRight:-13}} class="material-symbols-outlined">flight</span>
        <Link to = "Flights" style = {{color:'black'}}>Flights</Link>
        <span style = {{marginRight:-13}} class="material-symbols-outlined">inventory_2</span>
        <Link to = "Packages" style = {{color:'black'}}>Packages</Link>
        
            {/* <div className='login'> */}
            <Link to ="login" style={{color:'black',marginLeft:550}}>Log in</Link>
            
            <DropDown />
            
                {/* <div className='Scroll'> */}
            <select style = {{height:25,width:50,marginLeft:0,outline:'none',border:'none'}}>EUR
            
                {/* <div className='Scroll1'> */}
                <option>EUR</option>
                <option>GBP</option>
                <option>USD</option>
                <option>AED</option>
                <option>ARS</option>
                <option>AUD</option>
                <option>AZN</option>
                <option>BGN</option>
                <option>BHD</option>
                <option>BBR</option>
                <option>CAD</option>
                <option>AHF</option>
                <option>CLP</option>
                <option>ANY</option>
                <option>COP</option>
                <option>CZK</option>
                <option>COP</option>
                <option>CZK</option>
                <option>DKK</option>
                <option>CZK</option>
                <option>DZD</option>
                <option>EGP</option>
                <option>EUR</option>
                <option>HKD</option>
                {/* </div> */}
                {/* </div> */}
            </select>
            {/* </div> */}
            
        </div>
    
    </div>
        </>
    )
}
export { Navbar }