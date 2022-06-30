import AirConditoner from "./icons/air-conditioner.svg";
import Beach from "./icons/beach.svg";
import Breakfast from "./icons/breakfast.svg";
import Cancellation from "./icons/cancellation.svg";
import CarPark from "./icons/car-park.svg";
import FamilyFriendly from "./icons/family-friendly.svg";
import Gym from "./icons/gym.svg";
import HotTub from "./icons/hot-tub.svg";
import PayAtProperty from "./icons/pay-at-property.svg";
import PetFriendly from "./icons/pet-friendly.svg";
import Pool from "./icons/pool.svg";
import Restaurant from "./icons/restaurant.svg";
import Spa from "./icons/spa.svg";
import WheelChair from "./icons/wheelchair.svg";
import Wifi from "./icons/wifi.svg";



const Svg = ({icon})=>{
    console.log(icon)
    return(
        <div>
            <img src={icon}/>
        </div>
    )
}

export default Svg;