import React, { useState,useEffect } from 'react'
import './Home.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useSelector,useDispatch} from 'react-redux'
import { get } from '../Redux/action.js'

const Home = () => {
    const {data}=useSelector((store)=>store)
  console.log(data)
  const dispatch=useDispatch()

    useEffect(()=>{
        get(dispatch)
      },[])



    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
        console.log(dateState)
    }
    console.log(new Date())
    console.log(new Date().getYear())
    return (
        <>
            <div style={{ width: '99vw', height: "8vh", border: "1px solid red" }}></div>
            <div className="below_Navbar_logo_container">
                <div><img src="https://tse2.mm.bing.net/th?id=OIP.JSGmiGzRmDowBYk0KLyJAwHaCO&pid=Api&P=0&w=499&h=149" alt="" /></div>
                <div>
                    <div><h2>Deals from your favorite booking sites</h2></div>
                    <div><p>Try searching for a city, a specific hotel, or even a landmark!</p></div>
                </div>
            </div>
            <div className="serching_Box">
                <div className="inner_Seraching_box">
                    <div className="type_box">
                        <div>All Stays</div>
                        <div>Hotel</div>
                        <div>House/Apartment</div>
                    </div>
                    <div className="type_box_sibling">
                        <div>
                            <select name="" id="">
                                <option value="">Select</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Kolkata">Kolkata</option>
                            </select>
                        </div>
                        <div>
                            <div>
                                <div><span class="material-symbols-outlined">calendar_month</span></div>
                                <div className='check_in_out'>
                                    <p>Check in</p>
                                    <p>Sun,24-5-2022</p>
                                </div>
                                <div className='check_in_out'>
                                    <p>Check in</p>
                                    <p>Sun,24-5-2022</p>

                                </div>
                            </div>

                        </div>
                        <div>
                           <div>
                           <div><span class="material-symbols-outlined">group</span></div>
                            <div className='check_in_out'>
                                <p>!Room</p>
                                <p>2Guests</p>
                            </div>
                            <div ><button >Search</button></div>
                           </div>
                        </div>


                    </div>
                </div>
                <div className='compareLine'><h4>We compare multiple booking sites at once</h4></div>
                <div className='companyNameBox'>
                    <div>
                        <img src='https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/395.png'/>
                    </div>
                    <div><img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/452.png" alt="" /></div>
                    <div><img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/626.png" alt="" /></div>
                    <div><img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/2192.png" alt="" /></div>
                    <div><img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/14.png" alt="" /></div>
                    <div><img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/14.png" alt="" /></div>
                    <div><img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/634.png" alt="" /></div>
                    <div><p>+100More</p></div>
                </div>

            </div>

            <div className='topDestination'>These top destinations are just a click away</div>
            <div className='topDestinationcarouselBox'></div>

            <div className="descreptionBox">
                <div>
                   <div> <h3>trivago's global hotel search</h3></div>
                    <p>trivago’s hotel search allows users to compare hotel prices in just a few clicks from more than 300 booking sites for more than 5.0 million hotels and other types of accommodation in over 190 countries. We help millions of travelers each year compare deals for hotels and accommodations. Get information for weekend trips to cities like <span style={{color:"blue"}}>Mumbai</span> or <span style={{color:"blue"}}>Bengaluru</span>and you can find the right hotel on trivago quickly and easily. <span style={{color:"blue"}}>Delhi</span>and its surrounding area are great for trips that are a week or longer with the numerous hotels available.</p>
                </div>
                <div>
                    <div><h3>Find cheap hotels on trivago</h3></div>
                    <p>With trivago you can easily <b>find your ideal hotel and compare prices from different websites.</b> Simply enter where you want to go and your desired travel dates, and let our hotel search engine compare accommodation prices for you. To refine your search results, simply filter by price, distance (e.g. from the beach), star category, facilities and more. From budget hostels to luxury suites, trivago makes it easy to book online. You can search from a large variety of rooms and locations across India, like Shimla and Jaipur to popular cities and holiday destinations abroad!</p>
                </div>
                <div>
                   <div> <h3>Hotel reviews help you find your ideal hotel</h3></div>
                    <p>Over <b>175 million aggregated hotel ratings </b>and more than 19 million images allow you to find out more about where you're travelling. To get an extended overview of a hotel property, trivago shows the average rating and extensive reviews from other booking sites, e.g. Hotels.com, Expedia, Agoda, leading hotels, etc. trivago makes it easy for you to find information about your trip to Dubai, including the ideal hotel for you.</p>
                </div>
                <div>
                   <div> <h3>How to book</h3></div>
                    <p>trivago is a hotel search with an extensive price comparison. The prices shown come from numerous hotels and booking websites. This means that while users decide on trivago which hotel best suits their needs, the booking process itself is completed through the booking sites (which are linked to our website). By clicking on the “view deal” button, you will be forwarded onto a booking site where you can complete the reservation for the hotel deal found on trivago.<br />
                      <br />
                      Let trivago help you to find the right price from over 300 booking sites!</p>
                </div>
            </div>
             <div className='CitiesNAmeBox'>
                <div>
                    {/* <div><h3>More Top Cities</h3></div> */}
                    <h3>More Top Cities</h3>
                   <div>
                   <div>
                        <ul>
                        <li>Hotels in Pune</li>
                        <li>Hotels in Kolkata</li>
                        <li>Hotels in Amritsar</li>
                        <li>Hotels in Nashik</li>
                        <li>Hotels in Lansdowne</li>
                        <li>Hotels in Candolim</li>
                        <li>Hotels in Bhopal</li>
                        <li>Hotels in Chail</li>
                        <li>Hotels in Pahalgam</li>
                        <li>Hotels in Ghaziabad</li>
                        <li>Hotels in Aurangabad</li>
                        <li>Hotels in Velha Goa</li>
                        <li>Hotels in Zirakpur</li>
                        <li>Hotels in Mysore</li>
                        
                        </ul>
                    </div>
                    <div>
                        <ul>
                        <li>Hotels in Chandigarh</li>
                        <li>Hotels in Dubai</li>
                        <li>Hotels in Srinagar</li>
                        <li>Hotels in Matheran</li>
                        <li>Hotels in Ujjain</li>
                        <li>Hotels in Noida</li>
                        <li>Hotels in Kodagu</li>
                        <li>Hotels in Jodhpur</li>
                        <li>Hotels in jammu</li>
                        <li>Hotels in Yercaud</li>
                        <li>Hotels in Kota</li>
                        <li>Hotels in  Almora</li>
                        <li>Hotels in Gurgaon</li>
                        <li>Hotels in Dehradun</li>
                        
                        </ul>
                    </div>
                   </div>
                </div>
                <div>
                    <h3>Trivago International</h3>
                    <div>
                    <div>
                        <ul>
                        <li>trivago UAE</li>
                        <li>trivago Österreich</li>
                        <li>trivago Belgie</li>
                        <li>trivago Brasil</li>
                        <li>trivago Schweil</li>
                        <li>trivago Colombia</li>
                        <li>trivago Indonesia</li>
                        <li>trivago ישראל</li>
                        <li>trivago Italia</li>
                        <li>trivago Malaysia</li>
                        <li>trivago Norge</li>
                        <li>trivago Peru</li>
                        <li>trivago Polska</li>
                        <li>trivago Romania</li>
                        
                        </ul>
                    </div>
                    <div>
                        <ul>
                        <li>trivago Argentina</li>
                        <li>trivago Australia</li>
                        <li>trivago Българи</li>
                        <li>trivago Canada</li>
                        <li>trivago Chile</li>
                        <li>trivago Česko</li>
                        <li>trivago Danmark</li>
                        <li>trivago France</li>
                        <li>trivago 香港</li>
                        <li>trivago Ελλάδα</li>
                        <li>trivago ישראל</li>
                        <li>trivago 日本</li>
                        <li>trivago Italia</li>
                        <li>trivago India</li>
                        
                        </ul>
                    </div>
                </div>
                </div>
             </div>
        </>
    )
}

export default Home



{/* <Calendar 
value={dateState}
onChange={changeDate}/> */}