import React, { useEffect } from "react";
import HotelCard from "./HotelCard";
import { useSelector, useDispatch } from "react-redux";
import { get } from "../../Redux/action";

const HotelMain = () => {
  const { data } = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    get(dispatch);
  }, []);

  return (
    <div>
      {data.length == 0 ? (
        <>lodding</>
      ) : (
        data.map((hotel) => <HotelCard hotel={hotel} key={hotel.id} />)
      )}
    </div>
  );
};

export default HotelMain;
