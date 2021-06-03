import React from 'react';
import './About.css'
import '../App.css'
import './Services.css'

function About(props) {
    return (
        <div className='about-container'>
                <div className='about-top'>
                    <hr className='heading-separator'/>
                    <h3 className='about-head'>
                    About Us
                    </h3>
                </div>
                <div className="about-bottom">
                    <div className='about-story'>
                            <div className="about-story-paragraph">
                                <p>- We believe in intuitive navigation funneling your customers in a direction to be able to connect with you.
                                </p>
                                <p>- We provide user-friendly, crisp and clutter free solutions.</p>
                                <p>- We make sure that you get the best software infrastructure and set of applications to ensure the best experience of your clients.
                                </p>
                                <p>
                                    - So Whether you are handling thousands of payment transactions or you’re just starting out, you are in the right place.
                                </p>
                            </div>
                    </div>
                    <div className="about-img">
                        <img src='images/test.svg'/>
                    </div>
                </div>
        </div>
    );
}

export default About;