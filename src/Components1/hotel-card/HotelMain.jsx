import React, { useEffect } from "react";
import HotelCard from "./HotelCard";
import { useSelector, useDispatch } from "react-redux";
import { get } from "../../Redux/action";
// F:\trivago clone\trivago-clone\src

const HotelMain = () => {
  const { data } = useSelector((store) => store.CityandCountry);
  const dispatch = useDispatch();
  useEffect(() => {
    get(dispatch);
  }, []);

  return (
    <div style={{backgroundColor:"rgb(243,244,245)"}}>
      {data.length == 0 ? (
        <>lodding</>
      ) : (
        data.map((hotel) => <HotelCard hotel={hotel} key={hotel.id} />)
      )}
    </div>
  );
};

export default HotelMain;
