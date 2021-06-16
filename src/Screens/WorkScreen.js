import React, {useEffect, useState} from 'react';
import TopSectionBanner from "../Components/TopSectionBanner";
import {Link} from "react-router-dom";
import Footer from "../Components/Footer";
import PreviousWork from "../Components/PreviousWork";
import ReviewSection from "../Components/ReviewSection";
import {Loader} from "../Components/Loader";
import Header from "../Components/Header";

function WorkScreen(props) {
    const [loaded, setLoaded] = useState(false)


    useEffect(()=>{
        setTimeout(()=>{
            setLoaded(true)
        },2000)

    },[])
    return (
        <>
            {!loaded ? <Loader/> : (
                <>
                    <Header/>
                    <div>
            <TopSectionBanner image='images/img-5.jpg' section = 'Work'/>
            </div>
                    <div className='body-section'>
                <div style={{height:"2rem"}}></div>
                <div className='side-icons'>
                <div className='fb-icon'>
                    <Link to='/'>
                        <i className="fab fa-facebook"></i>
                    </Link>
                </div>
                <div className='mail-icon'>
                    <Link to='/'>
                        <i className="fas fa-envelope" ></i>
                    </Link>
                </div>
            </div>
                <PreviousWork/>
                <ReviewSection />
                <Footer/>
            </div>
                </>
            )}
        </>

    );
}

export default WorkScreen;