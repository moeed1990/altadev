import React from 'react'
import { Button } from './Button'
import '../Components/HeroSection.css'
import '../App.css';

function HeroSection() {
    return (
        <div className= 'hero-container w3-animate-opacity'>
            <h1 className='w3-animate-left'>Come start your business with us</h1>
            <p className='w3-animate-right'>What are you waiting for</p>
            <div className="hero-btns">
                <Button
                    address='/services'
                className='btns'
                buttonStyle= 'btn--outline'
                buttonSize= 'btn--large'
                >Learn More</Button>
            </div>
        </div>
    )
}

export default HeroSection
