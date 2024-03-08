import React, { useState } from 'react'
import './Carousel.css'
import { carouselItems } from '../../Assets/Data/carouselItems.js'
import CarouselItem from '../CarouselItem/carouselItem.js'


const Carousel = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0
        } else if (newIndex >= carouselItems.length) {
            newIndex = carouselItems.length - 1
        }
        setActiveIndex(newIndex)
    }

    return (
        <>
            <div className='Carousel'>
                <div className='inner' style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                    {carouselItems.map((item) => {
                        return <CarouselItem item={item} key={item.id} />
                    })}
                </div>
                <div className="carousel-btn">
                    <button className='arrow-btn' onClick={() => { updateIndex(activeIndex - 1) }}
                        style={{ background: activeIndex === 0 ? '#BAB8B8' : '#262626' }}>
                        <span className="material-symbols-outlined">
                            arrow_left_alt
                        </span>
                    </button>
                    <div className="page_no">
                        {carouselItems.map((_, index) => (
                            <button key={index} className={`page-btn${index === activeIndex ? "-active" : ""}`} onClick={() => updateIndex(index)}>
                                {index + 1}
                            </button>
                        ))}
                    </div>
                    <button className='arrow-btn' onClick={() => { updateIndex(activeIndex + 1) }}
                        style={{ background: activeIndex === carouselItems.length - 1 ? '#BAB8B8' : '#262626' }}>
                        <span className="material-symbols-outlined">
                            arrow_right_alt
                        </span>
                    </button>
                </div>
            </div>

        </>
    )
}

export default Carousel
