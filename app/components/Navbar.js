'use client'
import { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <>
      <div className='navbar'>
        <nav className='navbar-box'>
          <ul className='nav-links'>
            <li>
              <a href='/home'>HOME</a>
              <a href='/home'>ABOUT US</a>
              <a href='/home'>BRANCHES</a>
              <a href='/home'>MENU</a>
            </li>
          </ul>
        </nav>
        <div className='hamburger-menu'>
          <GiHamburgerMenu size={40} onClick={handleNav} />
        </div>
      </div>
      {/* mobile nav */}
      <div className={nav ? 'drawer' : 'drawer-off'}>
        <div className='drawer-box'>
          <div className='drawer-close'>
            <AiFillCloseCircle size={42} onClick={handleNav} />
          </div>
          <ul className='drawer-list-box'>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>BRANCHES</li>
            <li>MENU</li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default Navbar
