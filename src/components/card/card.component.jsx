import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className="card">
        <img src={props.p.avatar} alt="Person Image" />
        <div className="container">
            <h2>{props.p.first_name + ' ' + props.p.last_name}</h2>
            <p>{props.p.email}</p>
        </div>
    </div>
);