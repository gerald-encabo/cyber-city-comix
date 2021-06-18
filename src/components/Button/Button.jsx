import React from 'react';
import './Button.css';

const styles = ['btn-primary', 'btn-secondary']
const size = ['btn-medium', 'btn-large', 'btn-mobile', 'btn-wide']

const Button = ({
    children, buttonStyle, buttonSize
}) => {
    const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0]
    const checkButtonSize = size.includes(buttonSize) ? buttonSize : size[0]

    return (
        <button className=
           {`btn ${checkButtonStyle} ${checkButtonSize} onClick={onClick} type={type}`}>
           { children }
        </button>
    )
};

export default Button