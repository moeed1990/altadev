import React from 'react'
import { Button } from './Button'
import '../Components/HeroSection.css'
import '../App.css';

function HeroSection() {
    return (
        <div className= 'hero-container'>
            <h1>Come start your business with us</h1>
            <p>What are you waiting for</p>
            <div className="hero-btns">
                <Button 
                className='btns'
                buttonStyle= 'btn--outline'
                buttonSize= 'btn--large'
                >Learn More</Button>
            </div>
        </div>
    )
}

export default HeroSection
