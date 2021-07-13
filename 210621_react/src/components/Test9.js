import React from 'react';
//이미지 처리방법, 맵 활용

//src안에 이미지
import img0 from '../images/cat0.jpg'
import img1 from '../images/cat1.jpg'

const Test9 = () => {
    return (
        <div>
            <img src={img0}/>
            <img src={img1}/>
            {/* 이미지 src는다이렉트로 가져올 수 없다. */}

            {/* public폴더에 들어간 파일은 경로 설정 가능 */}
            <img src="./images/cat3.jpg"/>
        </div>
    );
};

export default Test9;