import React, { useState } from 'react'
import './Hero.css'
import { heroData } from '../../Assets/Data/heroData'
import BasketBall from '../../Assets/imgs/basketball_sport_icon_in_minimalist_3d_render_2 1.png'
import BasketballPlayer from '../../Assets/imgs/basketball-player-action-sunset 1.png'

const Hero = () => {

  const [expanded, setExpanded] = useState(false)
  return (
    <div className='Hero'>
      <div className="hero-contents">

        <div className='hero-bg-text'>
          <img src={BasketBall} alt="" className='basketball-bg' />
          <h2>Top scorer to the final match</h2>
        </div>

        <div className='avatar-and-texts'>
          <img src={BasketballPlayer} alt="" className='basketball-player' />
          <div className='hero-text-and-button'>
            <div>
              The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals.
              <p style={{ display: expanded ? "flex" : "none" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, sed consequuntur! Quam nobis, eligendi quis deserunt nemo harum blanditiis voluptas! Obcaecati nisi voluptate facere enim, ab voluptatibus aperiam fugiat repellat voluptates temporibus molestias et distinctio praesentium asperiores delectus recusandae iure assumenda, debitis, culpa at quo? Quae ipsum esse illum quaerat?
              </p>
            </div>
            <button onClick={(prev) => setExpanded(prev => !prev)}>
              {expanded ? "READ LESS" : "CONTINUE READING"}
            </button>
          </div>
        </div>

        <div className='hero-right'>
          <div className="today">
            <p>Today</p>
          </div>
          {heroData.map((item, index) => (
            index === heroData.length - 1 && !expanded ? null : (
              <div className='hero-card' key={item.id}>
                <div className="hero-card-overlay"></div>
                <img src={item.img} alt="" />
                <div className='hero-card-text'>
                  <span>{item.dateplace}</span>
                  <h6>{item.heading}</h6>
                </div>
              </div>
            )
          ))}
        </div>

      </div>
    </div>
  )
}

export default Hero
