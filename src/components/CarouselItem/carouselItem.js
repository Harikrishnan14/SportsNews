import React from 'react'
import './CarouselItem.css'

const CarouselItem = ({ item }) => {
    return (
        <div className='CarouselItem'>
            <div className="carousel-overlay"></div>
            <img src={item.img} alt='' className='carousel-img' />
            <div className="carousel-top-left-text">
                <span>{item.category}</span>
            </div>
            <div className="carousel-bottom-left-text">
                <span>{item.dateplace}</span>
                <h3>{item.heading}</h3>
                <p>{item.desc}</p>
            </div>
        </div>
    )
}

export default CarouselItem
