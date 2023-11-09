import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  return (
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
        <GiHamburgerMenu size={40} />
      </div>
    </div>
  )
}
export default Navbar
