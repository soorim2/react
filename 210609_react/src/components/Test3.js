import React from 'react';

const Test3 = () => {
    // 컴포넌트 함수영역
    const title = '신상명세서'
    const name = '홍길동'
    const age = 20
    const addr = '서울'
    const sex = '남자'
    return (
        <div>
            <h2>
                {/* 자바스크립트 형식은 {}중괄호를 사용하여 적어 줌 */}
                {title}
            </h2>
            <ul>
                <li>이름: {name}</li>
                <li>나이: {age}</li>
                <li>주소: {addr}</li>
                <li>성별: {sex}</li>
            </ul>
            {/* JSX내부에서는 주석도 {}안에서 사용 */}
            <p
                //태그 안에 주석을 적을 땐 이렇게 적어줍니다.
                // 한줄 주석
                /* 여러줄 주석 */
            >
                문단입니다.
            </p>
        </div>
    );
};

export default Test3;