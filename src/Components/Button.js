import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--small', 'btn--medium' , 'btn--large'] ;

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const selectButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const selectButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/contact' className='btn-mobile' >
            <button className = {`btn ${selectButtonStyle} ${selectButtonSize}`}
                    type={type}
                    onClick={onClick}>
                    {children}
            </button>
        </Link>
    );
};
