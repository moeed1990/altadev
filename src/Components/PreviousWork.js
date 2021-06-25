import React from 'react';
import '../App.css';
import './PreviousWork.css';
import {Link} from "react-router-dom";
import {data} from "../WorkData";
import {Button} from "./Button";

function PreviousWork(props) {
    const fileData = data
    console.log(fileData)
    return (
        <div className='work-container'>
            <hr className='heading-separator'/>
            <h3 className='work-head'>
                    Our Work
                    </h3>
            <div className="cards-container">
                {fileData.map((d) => (
                    <div className="card-body">
                        <div className='card-img'>
                        <img src={d.image}/>
                        <div className='card-overlay'>
                            <h4>{d.title}</h4>
                        </div>
                        <div className="card-button">
                            <button className='button-link'>
                                <a href={d.liveDemoLink} style={{textDecoration:"none"}} target="_blank">Live Demo</a></button>
                        </div>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    );
}

export default PreviousWork;