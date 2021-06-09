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