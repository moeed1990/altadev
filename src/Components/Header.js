import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import { Button } from './Button';


function Header(props) {
    const [click, setClick] = useState(false);
     const [button, setButton] = useState(true);
     const [navBackground, setNavBackground]= useState("none")

    const navRef= React.useRef()
    navRef.current = navBackground
     const handleClick = () => setClick(!click)
     const closeMobileMenu = () => setClick(false)

    const showButton = () => {
         if (window.innerWidth <= 960){
             setButton(false);
         } else {
             setButton(true);
         }
     }

     useEffect(()=> {
         const handleScroll = () =>{
         const show = window.scrollY > 150
        if(show){
            setNavBackground("black")
        }else {
            setNavBackground("none")
        }
    }
    document.addEventListener('scroll',handleScroll)
         return () =>{
             document.removeEventListener('scroll',handleScroll)
         }
         showButton()
     }, [])

     window.addEventListener('resize', showButton)
    return (
        <>
        <nav className='navbar' style={{background:navBackground}}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick= {closeMobileMenu}>
                    alta <i className="fab fa-typo3"></i>
                </Link>
                <div className="menu-icon" onClick = {handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active':'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/work' className='nav-links' onClick={closeMobileMenu}>
                            Work
                        </Link>
                    </li>
                </ul>

                {button && <Button buttonStyle='btn--primary' buttonSize='btn--small'> Contact Us </Button>}
            </div>
        </nav>

        </>
    )
}

export default Header;