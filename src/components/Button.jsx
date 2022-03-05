import React from 'react';
import "./Button.css"

const Button = ({children, adicionar}) => {
    return ( 
        <button onClick={adicionar} className='add-button'>
            {children}
        </button>
     );
}
 
export default Button;