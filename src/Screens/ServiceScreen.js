import React, {useEffect, useState} from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TopSectionBanner from "../Components/TopSectionBanner";
import Services from "../Components/Services";
import ServicesHead from "../Components/ServicesHead";
import {Link} from "react-router-dom";
import About from "../Components/About";
import PreviousWork from "../Components/PreviousWork";
import ReviewSection from "../Components/ReviewSection";
import {Loader} from "../Components/Loader";


function ServiceScreen(props) {
    const [loaded, setLoaded] = useState(false)


    useEffect(()=>{
        setTimeout(()=>{
            setLoaded(true)
        },3000)

    },[])
    return (
            <>
                {!loaded ? <Loader/> :
                    (
                        <>
                            <Header/>
                            <TopSectionBanner image = 'images/img-1.jpg' section='Services'/>
                            <div className='body-section'>
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
                                <ServicesHead />
                                <Footer/>
                            </div>
                        </>)}
            </>
        );
}

export default ServiceScreen;