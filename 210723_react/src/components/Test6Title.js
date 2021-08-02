// rsc 말고 rscm 하면 memo 자동으로
import React, { memo } from 'react';

const Test6Title = memo(() => {
    console.log('Test6Title')
    return (
        <div>
            <h1>Test6 title 입니다.</h1>
        </div>
    );
});

export default Test6Title;
/*
import React from 'react';
const Test6Title = () => {
    console.log('Test6Title')
    return (
        <div>
            <h1>Test6 title 입니다.</h1>
        </div>
    );
};

export default Test6Title;
*/
//React.memo - 컴포넌트의 리턴값을 기억