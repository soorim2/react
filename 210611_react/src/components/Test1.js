import React from 'react';
import './Test1.css';

const Test1 = () => {
    const title = '제목입니다.'
    // 인라인 스타일 {키 : 값} 객체 background-color => backgroundColor / 카멜형식으로 작성
    // 스타일 내부 기본 단위는 px. 다른단위 사용시 ''사용하여 문자열임을 표시
    const style1={
        fontSize:40,
        backgroundColor:'blue',
        padding:10,
    }
    return (
        <>
            {/* 데이터 바인딩 : 변수를(여기선 title) 선언하고 리액트jsx 형식 {}내부에 변수명을 담아 출력*/}
            <h2 style={style1}>{title}</h2>
            <p >class는 자바스크립트 클래스 정의 키워드. jsx에서는 className="클래스명"으로 사용</p>
            <div className="con-box">
                <article>test</article>
                <article>test</article>
                <article>test</article>
                <article>test</article>
            </div>
        </>
    );
};

export default Test1;