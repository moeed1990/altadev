import React from 'react';
import reviewData from '../ReviewData'
import './ReviewCard.css';
function ReviewCard(props) {
  return (
      <div className='rcard-container'>
        <div className='rcard-quote'>

        </div>
        <div className='rcard-text'>
            {props.text}
        </div>
          <hr></hr>
        <div className='user-detail'>
          <img src={props.image} />
          <h3>{props.name}</h3>
        </div>
      </div>
  );
}

export default ReviewCard;
