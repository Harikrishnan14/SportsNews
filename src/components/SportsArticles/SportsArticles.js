import React from 'react'
import './SportsArticles.css'
import { SportsData } from '../../Assets/Data/SportsArticles'

const SportsArticles = () => {
    return (
        <div className='SportsArticles'>
            <h2>Sports Article </h2>
            <div className="cards-container">
                {SportsData.map((item) => (
                    <div className="sports-news-card" key={item.id}>
                        <img src={item.img} alt="" />
                        <div className="sports-article-category">
                            <span>{item.category}</span>
                        </div>
                        <div className="user-details">
                            <img src={item.avatar} alt='' />
                            <span>{item.username}</span>
                        </div>
                        <span className='sports-news-card-date'>{item.date}</span>
                        <h4>{item.heading}</h4>
                        <span className='sports-news-card-desc'>{item.desc}</span>
                    </div>
                ))}
            </div>
            <div className="button-group">
                <button>
                    <span className="material-symbols-outlined">
                        arrow_left_alt
                    </span>
                </button>
                <button style={{ background: "#262626" }}>
                    <span className="material-symbols-outlined">
                        arrow_right_alt
                    </span>
                </button>
            </div>
        </div>
    )
}

export default SportsArticles
