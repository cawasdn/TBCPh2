'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    const overflow = document
      .querySelector('body')
      .classList.toggle('overflow-toggle')
  }
  return (
    <>
      <div className='navbar'>
        <nav className='navbar-box'>
          <ul className='nav-links'>
            <Link href='/'>
              <li>HOME</li>
            </Link>
            <Link href='/aboutus'>
              <li>ABOUT US</li>
            </Link>
            <Link href='/menu'>
              <li>MENU</li>
            </Link>
            <Link href='/branches'>
              <li>BRANCHES</li>
            </Link>
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
          <nav>
            <ul className='drawer-list-box'>
              <Link href='/' onClick={handleNav}>
                <li>HOME</li>
              </Link>
              <Link href='/aboutus' onClick={handleNav}>
                <li>ABOUT US</li>
              </Link>
              <Link href='/menu' onClick={handleNav}>
                <li>MENU</li>
              </Link>
              <Link href='/branches' onClick={handleNav}>
                <li>BRANCHES</li>
              </Link>
            </ul>
          </nav>
          <div className='nav-logo'>
            <Image src='/tbc-nav-logo.jpg' width={140} height={140} />
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar
