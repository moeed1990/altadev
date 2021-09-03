import React from 'react';
import './ServiceDetails.css'

function ServiceDetails(props) {
    return (
        <div className='service-detail-container'>
            <div className="service-detail-title">
                {props.title}
            </div>
            <div className="service-detail-body">
                <div className="service-detail-text">
                    {props.text}
                    <ul style={{padding:"1.5rem"}}>
                            <li>Intuitive, elegant approaches focused on user experience</li>
                            <li>Knowing whether your concept can work technically can save you heartache and money.</li>
                            <li>You deserve the best.Your product deserves nothing less.</li>
                            <li>Any product can launch.Successful products evolve.</li>
                            <li>Thoughtful and comprehensive product strategy is critical to the success of your product.</li>
                    </ul>
                </div>
                <div className="service-detail-textimage">
                    <img src ={props.image} alt='service'/>
                </div>
            </div>
            <div className="service-detail-image">
                <img src = {props.imageBottom} alt='bottomservice'/>
            </div>
        </div>
    );
}

export default ServiceDetails;