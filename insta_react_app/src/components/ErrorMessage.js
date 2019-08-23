import React, {Component} from 'react';
import img from '../static/img/error.png';

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt="Error!"/>
        </>
    );
}

export default ErrorMessage;

