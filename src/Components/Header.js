import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import { Button } from './Button';


function Header(props) {
    const [click, setClick] = useState(false);
     const [button, setButton] = useState(true);
     const [navBackground, setNavBackground]= useState("none")
    const [navFontColor, setNavFontColor]= useState("white")

    const navRef= React.useRef()
    const colRef = React.useRef()
    const buttRef = React.useRef()

    navRef.current = navBackground
    colRef.current = navFontColor
    buttRef.current = button

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
            setNavBackground("white")
            setNavFontColor("Black")
        }else {
            setNavBackground("none")
            setNavFontColor("White")
        }
    }
    document.addEventListener('scroll',handleScroll)
    window.addEventListener('resize', showButton)
         return () =>{
             document.removeEventListener('scroll',handleScroll)
             window.removeEventListener('resize', showButton)
         }
         setButton()
     }, [])

    return (
        <>
        <nav className='navbar w3-animate-top' style={{background:navBackground}}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick= {closeMobileMenu}>
                    <img src ='images/Logo_altaDev.svg' alt='logo'/>
                </Link>
                <div className="menu-icon" onClick = {handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} style={{color:navFontColor}}></i>
                </div>
                <ul className={click ? 'nav-menu active':'nav-menu'} >
                    <li className="nav-item">
                        <Link to='/' className='nav-links' style={{color:navFontColor}} onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/services' className='nav-links' style={{color:navFontColor}} onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className='nav-links' style={{color:navFontColor}} onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/work' className='nav-links' style={{color:navFontColor}} onClick={closeMobileMenu}>
                            Work
                        </Link>
                    </li>
                </ul>
                {button  &&  <Button buttonStyle='btn--primary' buttonSize='btn--small'> Contact Us </Button>}
            </div>
        </nav>
        </>
    )
}

export default Header;