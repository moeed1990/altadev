import React, {useState, useEffect}from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from './ReviewCard'
import {reviewData} from '../ReviewData'
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import './ReviewSection.css'
import './ReviewCard.css';
// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);



function ReviewSection(props) {
    const [mobileViewEight, setMobileViewEight] = useState(false)
    const [mobileViewSix, setMobileViewSix] = useState(false)
    const [pageViewNumber, setPageViewNumber] = useState(3)

    const HandlePageNumber = () => {
        if (window.innerWidth <=800){
        setMobileViewEight(  true)
    } else{
            setMobileViewEight(  false)
        }
        if (window.innerWidth <= 600) {
        setMobileViewSix(true)
        }else {
            setMobileViewSix(false)
        }
    }


    useEffect(()=>{
        if(window.innerWidth <= 600){
            setPageViewNumber('1')
        }else if (window.innerWidth <=800){
            setPageViewNumber(2)
        }else {
            setPageViewNumber(3)
        }
    },[setPageViewNumber,HandlePageNumber])

    window.addEventListener('resize', HandlePageNumber)
    return (
        <>
            <Swiper slidesPerView={pageViewNumber} spaceBetween={30} pagination={{
            "clickable": true
            }} className="mySwiper">
                {reviewData.map((data,index) => {
                    return(
                         <SwiperSlide>
                            <ReviewCard key={data.id} text={data.reviewText} name={data.user} image={data.image} />
                         </SwiperSlide>
                        );
                })
                }
            </Swiper>
        </>
    );
}

export default ReviewSection;