import React from 'react';
import './card.css';

const Card = ({props}) => (
        <div className="card">
            <div className="card-top">
                <img src={props.urlToImage} alt="News" />
            </div>
            <div className="card-bottom">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <h6>{props.publishedAt}</h6>
            </div>
        </div>
);

export default Card