import React from 'react';
import Test6Sub from './Test6Sub'

const Test6 = () => {
    return (
        <>
            <Test6Sub
                title="강호동 신상명세서"
                name="강호동"
                age={20}
                addr= "서울"
                tel="010-1234-5678"
                color="tomato"
                done={true}
            />
            <Test6Sub
                title="유재석 신상명세서"
                addr="제주도"
                color="purple"
                done={false}
            />
            <Test6Sub/>
        </>
    );
};

export default Test6;