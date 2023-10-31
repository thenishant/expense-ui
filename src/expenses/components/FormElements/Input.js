import React from 'react';

import './Input.css';

const Input = props => {
    const element =
        props.element === 'input' ? (
            <input
                id={props.id}
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}/>
        ) : (
            <textarea
                id={props.id}
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                rows={props.rows || 3}/>
        );

    return (
        <div className={`form-control`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
        </div>
    );
};

export default Input;
