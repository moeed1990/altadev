import React from 'react';
import reviewData from '../ReviewData'
import './ReviewCard.css';
function ReviewCard(props) {
  return (
      <div className='rcard-container'>
        <div className='rcard-quote'>
            <i className="fas fa-quote-left"></i>
        </div>
        <div className='rcard-text'>
            {props.text}
        </div>
        <div className='user-detail'>
            <div className="image-user">
                <img src={props.image} />
            </div>
          <h3>{props.name}</h3>
        </div>
      </div>
  );
}

export default ReviewCard;
