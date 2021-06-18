import React from 'react'
import SliderData from '../Data/ComicsData'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

function SliderContent(props) {


    return (
        <section>
            { SliderData.map((slide, index) => 
                <div className={index === props.activeIndex ? 'slides active' : 'inactive' } key={index}>
                    <img className='slide-image' src={slide.img} alt={slide.alt}/>
                    <div className="slide-tile">
                        <p className='slide-alert'>Here's the latest comics:</p>
                        <h1 className='slide-title'>{slide.title}</h1>
                        <p className='slide-date'>Release Date: {slide.month}/{slide.day}/{slide.year}</p>
                        <Link to={`/comics/${slide.num}`} className='slider-btn' >
                                 <Button buttonStyle='btn-secondary'>For More Info</Button>
                        </Link>
                    </div>
                </div>
            )}
        </section>
    )
}

export default SliderContent
