import Link from 'next/link'
import {
  BsGoogle,
  BsLinkedin,
  BsGithub,
  BsFillPersonFill,
  BsFillTelephoneFill,
} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <div>
        <h1>The Big Cup</h1>
        <p>Where taste meets imagination</p>
      </div>
      <div className='footer-about'>
        <h3>About</h3>
        <p>
          This website has been developed as a means to present and exhibit my
          professional portfolio. The website features a user-friendly
          interface, intuitive navigation, and seamless integration of
          multimedia elements to effectively communicate my abilities and
          experiences to potential clients, employers, or collaborators.
        </p>
      </div>

      <div className='footer-navigation'>
        <h3>Navigation</h3>
        <nav className='footer-navigation-box'>
          <Link href='/'>
            <li>Home</li>
          </Link>
          <Link href='/aboutus'>
            <li>About us</li>
          </Link>
          <Link href='/menu'>
            <li>Menu</li>
          </Link>
          <Link href='/branches'>
            <li>Branches</li>
          </Link>
        </nav>
      </div>
      <div className='footer-line'></div>

      <div className='footer-info'>
        <div className='footer-logos'>
          <BsGoogle size={28} />
          <BsLinkedin size={28} />
          <Link href='https://github.com/cawasdn' target='_blank'>
            <BsGithub size={28} />
          </Link>
          <Link href='https://decawas.vercel.app/' target='_blank'>
            <BsFillPersonFill size={28} />
          </Link>
          <BsFillTelephoneFill size={28} />
        </div>
      </div>
      <div className='copyright'>
        copyright &copy;{' '}
        <Link href='https://decawas.vercel.app/' target='_blank'>
          decawas.vercel.app
        </Link>{' '}
        - 2023
      </div>
    </footer>
  )
}
export default Footer
