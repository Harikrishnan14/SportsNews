import React from 'react'
import './NewsLetter.css'
import Rugby from '../../Assets/imgs/american-football-player-posing-with-ball-white 1.png'
import Vector from '../../Assets/imgs/Vector.png'
import Facebook from '../../Assets/imgs/Facebook.png'
import Twitter from '../../Assets/imgs/Twitter.png'
import Instragram from '../../Assets/imgs/Instagram.png'


const NewsLetter = () => {
    return (
        <div className='NewsLetter'>
            <div className='text-avatar-image'>
                <div className='text-avatar-image-inner'>
                    <h1>NEWSLETTER SUBSCRIPTION</h1>
                    <div className='news-letter-input-group'>
                        <input type='email' placeholder='shovon.khan0099@gmail.com' />
                        <button>
                            <span className="material-symbols-outlined">
                                north_east
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={Rugby} alt="" className='news-letter-avatar' />
                    <img src={Vector} alt="" className='news-letter-avatar-bg' />
                </div>
            </div>
            <div className='navigations'>
                <div className="socials">
                    <img src={Facebook} alt="" className='facebook' />
                    <img src={Instragram} alt="" />
                    <img src={Twitter} alt="" />
                </div>

                <div className="news-letter-nav-btn">
                    <button className='news-letter-arrow-btn'>
                        <span className="material-symbols-outlined">
                            arrow_left_alt
                        </span>
                    </button>
                    <div className="">
                        {Array(5).fill().map((_, index) => (
                            <button key={index} className="news-letter-page-btn" style={{ background: index === 0 ? "#262626" : "", color: index === 0 ? "white" : "" }}>
                                {index + 1}
                            </button>
                        ))}
                    </div>
                    <button className='news-letter-arrow-btn' style={{ background: "#262626" }}>
                        <span className="material-symbols-outlined">
                            arrow_right_alt
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
