import React, { useEffect } from "react";
import HotelCard from "./HotelCard";
import { useSelector, useDispatch } from "react-redux";
import { get } from "../../Redux/allData/action";
import HotelFilter from "./HotelFilter";

const HotelMain = () => {
  const { data } = useSelector((store) => store.AllData);
  const dispatch = useDispatch();
  useEffect(() => {
    get(dispatch);
  }, []);

  return (
    <div style={{ backgroundColor: "rgb(243,244,245)" }}>
      {data.length == 0 ? (
        <>lodding</>
      ) : (
        <HotelFilter data={data} />

        // data.map((hotel) => <HotelCard hotel={hotel} key={hotel.id} />)
      )}
    </div>
  );
};

export default HotelMain;
