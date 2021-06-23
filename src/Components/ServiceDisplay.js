import React from 'react';
import {Button} from "./Button";
import './ServicesDisplay.css'
import {Link} from "react-router-dom";

function ServiceDisplay(props) {
    return (
        <>
            <div className="service-display-container">
                <h1>Your Idea, Our Work</h1>
                <div className="service-display-cards">
                    <div className="service-display-card">
                        <i className="fas fa-palette" style={{color:"black"}}></i>
                        <h1>Web Design</h1>
                        <p>With our expert Website designers get the creative, professional and highly spectacular Designs that are designed exactly according to your needs.</p>
                        <ul style={{padding:"1rem"}}>
                            <li>High-end Unique Web Designs</li>
                            <li>Best UI/UX Designs on Figma</li>
                            <li>Demo Sites on Figma</li>
                            <li>No Coding</li>
                        </ul>
                        <Button address='/services/webdesign'>View More</Button>
                    </div>
                    <div className="service-display-card">
                        <i className="fas fa-laptop-code" style={{color:"black"}}></i>
                        <h1>Web App</h1>
                        <p>We can create the efficient mobile Apps that can full fill your requirements and allows you to stay in the competition</p>
                        <ul style={{padding:"1rem"}}>
                            <li>High-end Development Techniques</li>
                            <li>Framework - Django Python</li>
                            <li>React with Django</li>
                            <li>Html5, Css and Javascript</li>
                        </ul>
                        <Button address='/services/webdev'>View More</Button>
                    </div>
                    <div className="service-display-card">
                        <i className="fab fa-apple" style={{color:"black"}}></i>
                        <h1>Mobile App</h1>
                        <p>We can create the responsive codes that can be used across the various platforms allow you to stay in the competition</p>
                        <ul style={{padding:"1rem"}}>
                            <li>High-end Development Techniques</li>
                            <li>iOS - Swift, Obj-C</li>
                            <li>Android - Kotlin</li>
                            <li>UI/UX Design on Figma</li>
                        </ul>
                        <Button address='/services/appdev'>View More</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServiceDisplay;