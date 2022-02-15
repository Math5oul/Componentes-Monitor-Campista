import React from 'react';
import { RangeSlider } from 'rsuite';


export default function SliderBar(props) {
    return (
        <div>
            <RangeSlider defaultValue={[10, 100]} 
            max={props.max}
            min={props.min}/>
        </div>
    )

}