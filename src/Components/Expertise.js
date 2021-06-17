import React from 'react';
import './Expertise.css'

function Expertise(props) {
    return (
        <>
            <div className="expertise-container">
                <div className='expertise-body'>
                    <hr className='heading-separator'/>
                    <h2>Services and Expertise</h2>
                    <div className="service-subcat-items-body">
                        <div className="expertise-box">
                            <div className="expertise-square">Web Design And Redesign</div>
                            <div className="expertise-square">HTML5, CSS and JavaScript</div>
                            <div className="expertise-square">Django Python</div>
                            <div className="expertise-square">React with Django</div>
                            <div className="expertise-square">ioS App Design</div>
                            <div className="expertise-square">ioS Swift Development</div>
                            <div className="expertise-square">ioS App Deployment</div>
                            <div className="expertise-square">ioS App SEO</div>
                            <div className="expertise-square">Android App Design</div>
                            <div className="expertise-square">Android App Development</div>
                            <div className="expertise-square">Android App Deployment</div>
                            <div className="expertise-square">Android App SEO</div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default Expertise;