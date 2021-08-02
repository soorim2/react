import React from 'react';

const Test6Sub = ({text,count}) => {
    console.log('Test6Sub')
    return (
        <div>
            <h2>Test6Sub : {text} / {count} </h2>
        </div>
    );
};

export default React.memo(Test6Sub);