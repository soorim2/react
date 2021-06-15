import React, { useState } from 'react';

const Test2 = () => {
    const [bgcolor, setBgcolor] = useState('pink')
    const onColor = () => {
        setBgcolor( bgcolor === 'tomato' ? 'pink' : 'tomato')
    }
    return (
        <div>
            <p>클릭하면 배경색이 pink/tomato</p>
            <h2 style={{width:400,padding:50, border:'1px solid #000', background:bgcolor, cursor:'pointer'}} onClick={onColor}>
                배경색 : {bgcolor}
            </h2>
        </div>
    );
};

export default Test2;