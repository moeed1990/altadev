import React from 'react';
import {data} from "../WorkData";

const User1Img = ''
const User2Img = ''
const User3Img = ''
const User4Img = ''


function ReviewCard(props) {
    const { reviewText, username, userImgUrl } = props;
    return (
        <div className='reviewcard-container'>
            <div className="rcard-quoteIcon">
            </div>
            <div className="review-text">
                {reviewText}
            </div>
            <line/>
            <div className="user-detail">
                <div className="user-image">
                    <img src='' alt=''/>
                </div>
                <div className="username">{username}</div>
            </div>
        </div>
    );
}

export default ReviewCard;