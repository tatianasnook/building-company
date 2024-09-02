import { Link } from 'react-scroll';
import './header.css';
import { useState } from 'react';
import burger from '../../icons/burger-btn.png';
import closed from '../../icons/closed-btn.png';
import logo from '../../icons/logo.png';


const Header = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <header className='header'>
      <img src={ logo } alt="Logo" className='header-logo'/>
      <nav className='header-nav'>

        <ul id="header-links" className={isOpen ? 'active' : ''}>
          <li className='header-link'>
            <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
          </li>
          <li className='header-link'>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
          </li>
          <li className='header-link'>
            <Link to="service" spy={true} smooth={true} offset={-100} duration={500}>Services</Link>
          </li>
          <li className='header-link'>
            <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
          </li>
        </ul>
        
        <div className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? closed : burger} alt="mobile menu icon" />
        </div>
        
      </nav>
    </header>
  )
}

export default Header;
