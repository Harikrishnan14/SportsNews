import React from 'react'
import './Navbar.css'
import Lens from '../../Assets/imgs/LensVector.png'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div>
                <div className="logo">Sport News</div>
            </div>
            <div>
                <ul className='nav-list'>
                    <li className='list-item' style={{ fontWeight: "700", color: "#262626" }}>Home</li>
                    <li className='list-item'>Category</li>
                    <li className='list-item'>Trending News</li>
                    <li className='list-item'>Recent News</li>
                    <li className='list-item'>Clubs Ranking</li>
                    <li className='list-item'>Sports Article</li>
                </ul>
            </div>
            <div>
                <button className='search-btn'>
                    <img className='lens-img' src={Lens} alt='' />Search
                </button>
            </div>
        </nav>
    )
}

export default Navbar
