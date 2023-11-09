'use client'

import { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

const Drawer = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className={nav ? 'drawer' : 'overlay-off'}>
      <div className='drawer-box'>
        <div className='drawer-close'>
          <AiFillCloseCircle size={42} />
        </div>
        <ul className='drawer-list-box'>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>BRANCHES</li>
          <li>MENU</li>
        </ul>
      </div>
    </div>
  )
}
export default Drawer
