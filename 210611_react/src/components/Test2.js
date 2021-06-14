import React from 'react';

const Test2 = () => {
        // 함수영역
        const done1 = true;
        const done2 = false;
        const done3 = undefined;
        return (
                <>
                        {/* JSX영역 */} 
                        <p>
                                {
                                        done1 === true? <button>로그인</button> : <button>로그아웃</button>
                                }
                        </p>
                        <p>
                                {done1 ? <button>참</button> : <button>거짓</button>}
                        </p>
                        <p>
                                {done1 && <button>참의결과</button>}
                        </p>
                        <p>
                                {done2 ===false  && <button>참의결과2</button>}
                        </p>
                        <p>
                                {done2 || <button>거짓결과</button>}
                        </p>
                        <p>
                                {done3 || <button>거짓결과2</button>}
                        </p>
                </>
        );
};

export default Test2;