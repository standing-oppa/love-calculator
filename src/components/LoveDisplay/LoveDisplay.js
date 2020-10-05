import React from 'react';

const loveDisplay = (props) => (
    <div>
        <h2>The results are: {props.percentage}%</h2>
        <h3 style={{color: '#b83b5e'}}>{props.percentage >= 75 ? "Wow! That's a high chance!" : null}</h3>
    </div>
    
)

export default loveDisplay;