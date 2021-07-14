import React from 'react';
import './Test3.scss'
import styles from './Test3.module.scss'
const Test3 = () => {
    return (
        <div className={styles.box}>
            {styles.box}
        </div>
    );
};

export default Test3;
/*
    1.파일명.css
    2.파일명.module.css
        -클래스명이 중복되지 않게 작업
        -기존 프로젝트의 클래스를 건드리지 않고 같은 이름으로 작성하되 중복되지 않게
            => 클래스명의 중복 제거
                ex)파일명_클래스명__아무말
                className="box" - 기존
                className={참조변수.box} => 파일명_box_아무말
            
        
*/