import React from 'react';
import PropTypes from "prop-types";

import './Card.css'
const Card = props => {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Card;