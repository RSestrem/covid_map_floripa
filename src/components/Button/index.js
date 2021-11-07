import React from 'react';
import { StyledButton } from './styles';

const Button = ({ children, onClick, id = null }) => {
    return (
        <StyledButton
            type='button'
            className='button-component'
            onClick={onClick}
            id={id}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
