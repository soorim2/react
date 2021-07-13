// rsc:함수형 rcc:클래스형 자동완성 
import React, { Fragment } from 'react';
const Test2 = () => {
    return (
        <>
            <h2>
                JSX영역
            </h2>
            <h4>return() 내부가 한 줄 이상일 때</h4>
            <p>
             div 로 묶어준다. = 최상위 부모는 1개여야한다.
            </p>
            <p>
                단순히 묶어주기만 할 때, 접근성 문제가 있을 때 (ul내부 요소로 div 사용 불가)
                Fragment <Fragment></Fragment>를 사용하여 묶어준다.
                = <></>
            </p>
            <h4>
                빈태그, 단독태그 /
            </h4>
            <img src=""/>
            <input type="text" />


        </>
    );
};

export default Test2;