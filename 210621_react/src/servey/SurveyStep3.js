import React from 'react';

const SurveyStep3 = ({form , onNext,onPrev}) => {
    const{username, age, addr, tel, job, email, sex, fav } = form
    return (
        <>
            <ul>
                <li>
                    <span>이름</span> : {username} <em></em>
                </li>
                <li>
                    <span>나이</span> : {age} <em></em>
                </li>
                <li>
                    <span>주소</span> : {addr} <em></em>
                </li>
                <li>
                    <span>연락처</span> : {tel} <em></em>
                </li>
                <li>
                    <span>직업</span> : {job} <em></em>
                </li>
                <li>
                    <span>이메일</span> : {email} <em></em>
                </li>
                <li>
                    <span>성별</span> : {sex} <em></em>
                </li>
                <li>
                    <span>관심분야</span> : {fav} <em></em>
                </li>
            </ul>
            <p>
                <button onClick={onPrev}>이전</button>
                <button onClick={onNext}>다음</button>
            </p>
        </>
    );
};

export default SurveyStep3;