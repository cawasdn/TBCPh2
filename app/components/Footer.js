import { GiHamburgerMenu } from 'react-icons/gi'
const Footer = () => {
  return (
    <footer>
      <div>
        <h1>FLAVORY</h1>
        <p>Where taste meets imagination</p>
      </div>
      <div>
        <p>
          This website has been developed as a means to present and exhibit my
          professional portfolio. The website features a user-friendly
          interface, intuitive navigation, and seamless integration of
          multimedia elements to effectively communicate my abilities and
          experiences to potential clients, employers, or collaborators.
        </p>
        <hr />
        <div>
          <GiHamburgerMenu size={40} />
          <GiHamburgerMenu size={40} />
          <GiHamburgerMenu size={40} />
          <GiHamburgerMenu size={40} />
        </div>
      </div>
    </footer>
  )
}
export default Footer
