import React from 'react';
import './Split.css';

function Split(props){
    const combineClassNames =`split ${props.className}`;
    const newStyles ={flex: props.flexBasis };
    return (
        <div className ={combineClassNames}
        style={newStyles}>
            {props.children}
        </div>
    );
}

export default Split;