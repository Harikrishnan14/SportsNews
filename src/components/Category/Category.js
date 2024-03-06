import React from 'react'
import './Category.css'
import Football from '../../Assets/imgs/soccer-ball-green-grass-soccer-field-generative-ai 1.png'
import Basketball from '../../Assets/imgs/close-up-basketball-outdoors 1.png'
import SportsCar from '../../Assets/imgs/sport-car-is-drifting-track-with-smoke-around-it 1.png'
import TableTennis from '../../Assets/imgs/red-ping-pong-racket-sports-equipment 1.png'

const Category = () => {
    return (
        <div className='Category'>
            <h1 className='category-heading'>Category</h1>
            <div className="card-div">
                <div className='cards'>
                    <div className="sqaure" style={{ marginBottom: "15px" }}>
                        <div className='card-text'>FOOTBALL</div>
                    </div>
                    <div>
                        <img src={Football} alt="" className='card-img' />
                    </div>
                </div>
                <div className='cards'>
                    <div>
                        <img src={Basketball} alt="" className='card-img' />
                    </div>
                    <div className="sqaure">
                        <div className='card-text'>BASKET BALL</div>
                    </div>
                </div>
                <div className='cards'>
                    <div className="sqaure">
                        <div className='card-text'>CAR SPORT</div>
                    </div>
                    <div>
                        <img src={SportsCar} alt="" className='card-img' />
                    </div>
                </div>
                <div className='cards'>
                    <div>
                        <img src={TableTennis} alt="" className='card-img' />
                    </div>
                    <div className="sqaure">
                        <div className='card-text'>TABLE TENNIS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
