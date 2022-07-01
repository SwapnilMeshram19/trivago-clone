import React,{useState} from 'react';
import ReactSlider from 'react-slider';

const RangeSlider =()=>{
    const [price, setPrice]=useState([0,42000]);
    

    return (
        <div>
            <ReactSlider
                 className="horizontal-slider"
                 thumbClassName="example-thumb"
                 trackClassName="example-track"
                 defaultValue={[0,42000]}
                 ariaLabel={['Lower thumb', 'Upper thumb']}
                 ariaValuetext={state => `Thumb value ${state.valueNow}`}
                 renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                 pearling
                 minDistance={10}
            
            />

            
        </div>
    )
}

export default RangeSlider;