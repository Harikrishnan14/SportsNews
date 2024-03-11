import React, { useState } from 'react'
import './Navbar.css'
import Lens from '../../Assets/imgs/LensVector.png'
import BurgerMenu from '../../Assets/imgs/BurgerMenu.png'
import CloseMenu from '../../Assets/imgs/CloseMenu.png'

const Navbar = () => {

    const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false)

    return (
        <nav className='Navbar'>
            <div className='logo-div'>
                <div className="logo">Sport News</div>
            </div>
            <div className='nav-div'>
                <ul className='nav-list'>
                    <li className='list-item' style={{ fontWeight: "700", color: "#262626" }}>Home</li>
                    <li className='list-item'>Category</li>
                    <li className='list-item'>Trending News</li>
                    <li className='list-item'>Recent News</li>
                    <li className='list-item'>Clubs Ranking</li>
                    <li className='list-item'>Sports Article</li>
                </ul>
            </div>
            <div className='search-button-div'>
                <button className='search-btn'>
                    <img className='lens-img' src={Lens} alt='' />Search
                </button>
            </div>
            <div className="burger-menu-div">
                {!toggleBurgerMenu && <img src={BurgerMenu} alt="" className='burger-menu-icon' onClick={() => setToggleBurgerMenu(true)} />}
                {toggleBurgerMenu && <img src={CloseMenu} alt="" className='burger-menu-icon' onClick={() => setToggleBurgerMenu(false)} />}
                {toggleBurgerMenu && <div className="burger-menu">
                    <ul className='burger-menu-nav-list'>
                        <li className='burger-menu-list-item'>Home</li>
                        <li className='burger-menu-list-item'>Category</li>
                        <li className='burger-menu-list-item'>Trending News</li>
                        <li className='burger-menu-list-item'>Recent News</li>
                        <li className='burger-menu-list-item'>Clubs Ranking</li>
                        <li className='burger-menu-list-item'>Sports Article</li>
                    </ul>
                </div>}
            </div>
        </nav>
    )
}

export default Navbar
