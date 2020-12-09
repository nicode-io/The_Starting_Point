import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './eventsCarousel.css';


/**
 * This function return a carousel with pictures
 * inside, will be used primary in Events section
 * @returns {JSX.Element}
 */
export function EventsCarousel () {

    // Variables
    let sliderArr = [<img src="https://picsum.photos/400"  alt={''}/>, <img src="https://picsum.photos/401"  alt={''}/>, <img src="https://picsum.photos/480"  alt={''}/>];
    const [x, setX] = useState(0)
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    }
    const goRight = () => {
        (x === -100 * (sliderArr.length - 1)) ? setX(0) : setX(x - 100);
    }

    // Render the carousel
    return (
        <section className="slider">
            {
                sliderArr.map((item, index) => {
                    return (
                        <article key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
                            {item}
                        </article>
                    )
                })
            }
            <button id="goLeft" onClick={goLeft}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button id="goRight" onClick={goRight}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </section >
    )
}
