import React from 'react';
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, DotGroup} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './ReviewSection.css'
import ReviewCard from "./ReviewCard";
import './ReviewCard.css'

function ReviewSection(props) {

    return (
        <div className='review-container'>
            <hr className='heading-separator'/>
            <div className="review-title">What other say about us</div>
                <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={250}
        totalSlides={4}
        visibleSlides={2}
        dragEnabled={false}
      >
        <Slider>
          <Slide index={0}>
            <ReviewCard
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="John coner"
              userImgUrl=''
            />
          </Slide>
          <Slide index={1}>
            <ReviewCard
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="John coner"
              userImgUrl=''
            />
          </Slide>
          <Slide index={2}>
            <ReviewCard
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="John coner"
              userImgUrl=''
            />
          </Slide>
          <Slide index={3}>
            <ReviewCard
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="John coner"
              userImgUrl=''
            />
          </Slide>
        </Slider>
        <DotGroup />
      </CarouselProvider>
        </div>
    );
}

export default ReviewSection;