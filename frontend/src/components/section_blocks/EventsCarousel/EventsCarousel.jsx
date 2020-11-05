import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './eventsCarousel.css';

const EventsCarousel = () => {

    let sliderArr = [1, 2, 3];

    const [x, setX] = useState(0)
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    }
    const goRight = () => {
        (x === -100 * (sliderArr.length - 1)) ? setX(0) : setX(x - 100);
    }

    return (
        <div className="slider">
            {
                sliderArr.map((item, index) => {
                    return (
                        <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
                            {item}

                        </div>
                    )
                })
            }
            <button id="goLeft" onClick={goLeft}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button id="goRight" onClick={goRight}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div >
    )

};

export {
    EventsCarousel
};