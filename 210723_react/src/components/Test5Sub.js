import React from 'react';

const Test5Sub = ({title,cnt}) => {
    console.log({title},{cnt})
    return (
        <div>
            <h1>Test5Sub : {title} : {cnt}</h1>
        </div>
    );
};

export default React.memo(Test5Sub);

/*
    컴포넌트의 return 기억 : React.memo(컴포넌트명)

*/