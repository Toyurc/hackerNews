import React from 'react';
import './card.css';

const Card = (props) => (
        <div className="card">
            <div>
                <img src={props.UrlToImage} alt="alt" />
            </div>
            <div>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <h6>{props.publishedAt}</h6>
            </div>
        </div>
);

export default Card