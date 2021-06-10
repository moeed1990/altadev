import React from 'react';
import './TopSectionBanner.css'

function TopSectionBanner(props) {
    return (
        <>
            <div className="top-section-container">
                <img src={props.image} alt='services'/>
                <div className="top-section-overlay"></div>
                <h1>{props.section}</h1>
            </div>
        </>
    );
}

export default TopSectionBanner;