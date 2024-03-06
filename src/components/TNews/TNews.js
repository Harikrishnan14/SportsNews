import React from 'react'
import './TNews.css'
import { TrendingNews } from '../../Assets/Data/TrendingNews'
import Sportsman from '../../Assets/imgs/sportsman-drinking-water-training-stationary-bike 1.png'

const TNews = () => {
    return (
        <div className='TNews'>
            <div className='left-side'>
                <div>
                    <h3 className='trending-news-heading'>Trending News</h3>
                </div>
                <div className="news-container">
                    {TrendingNews.map((news) => (
                        <div className="news" key={news.id}>
                            <div>
                                <img src={news.img} alt="" className='news-img' />
                            </div>
                            <div className='news-details' style={{ borderTop: news.id === 0 ? "none" : "1px solid #B8C2CE" }}>
                                <span className='event-date'>{news.dateplace}</span>
                                <h6 className='news-heading'>{news.heading}</h6>
                                <p className='news-desc'>{news.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='right-side'>
                <div className="overlay"></div>
                <img src={Sportsman} alt="" />
                <div className="top-left-text">
                    <span>Cycling</span>
                </div>
                <div className="bottom-left-text">
                    <span>Debits - 03 June 2023</span>
                    <h3>DISCOVER THE MEMBER BENEFITS OF USA CYCLING!</h3>
                </div>
            </div>
        </div>
    )
}

export default TNews
