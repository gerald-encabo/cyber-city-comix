import React from 'react'
import SliderData from '../Data/ComicsData';

function Dots(props) {
    return (
        <div className='all-dots'>
            { SliderData.map((slide, index) => (
                <span 
                    key={index} 
                    className={`${props.activeIndex === index ? 'dot active-dot' : 'dot' }`}
                    onClick = {event => props.onClick((event.target.value = index))}
                >
                </span>
            ))}
        </div>
    )
}

export default Dots
