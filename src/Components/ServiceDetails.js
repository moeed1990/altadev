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
                    <ul style={{color:"#E1E8EC", padding:"1.5rem"}}>
                            <li>{props.point1}</li>
                            <li>{props.point2}</li>
                            <li>{props.point3}</li>
                            <li>{props.point4}</li>
                            <li>{props.point5}</li>
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