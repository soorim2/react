import React from 'react';

const SurveyStep2 = ({onText, job, email, sex, fav, onNext,onPrev}) => {
    return (
        <>
            <p>
                <label>직업 : </label>
                <input value={onText} value={job} name="job" onChange={onText} type="text"/>
            </p>
            <p>
                <label>이메일 : </label>
                <input value={onText} value={email} name="email" onChange={onText} type="text"/>
            </p>
            <p>
                <label>성별 : </label>
                <input value={onText} value={sex} name="sex" onChange={onText} type="text"/>
            </p>
            <p>
                <label>관심분야 : </label>
                <input value={onText} value={fav} name="fav" onChange={onText} type="text"/>
            </p>
            <p>
                <button onClick={onPrev}>이전</button>
                <button onClick={onNext}>다음</button>
            </p>
        </>
    );
};

export default SurveyStep2;