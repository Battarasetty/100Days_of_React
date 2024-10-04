import React from 'react';

const Button = ({
    children,
    onClick,
    variant = 'primary',
    size = 'medium',
    disabled = false,
}) => {
    const baseStyle = {
        padding: size === 'large' ? '0.75rem 1.5rem' : size === 'medium' ? '0.5rem 1rem' : '0.25rem 0.5rem',
        borderRadius: '4px',
        fontFamily: 'Arial, sans-serif',
        cursor: disabled ? 'not-allowed' : 'pointer',
        border: variant === 'outline' ? '2px solid #007bff' : 'none',
        backgroundColor: disabled ? '#d3d3d3' : variant === 'primary' ? '#007bff' : variant === 'secondary' ? '#6c757d' : 'transparent',
        color: disabled ? 'white' : variant === 'outline' ? '#007bff' : 'white',
        opacity: disabled ? 0.6 : 1,
    };

    

    return (
        <button style={baseStyle} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
