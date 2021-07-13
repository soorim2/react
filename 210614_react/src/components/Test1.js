import React, { useState } from 'react';

const Test1 = () => {
	const [name, setName] = useState('아무개');
	const [color, setColor] = useState('green');

	const onName1 = () => {
		setName('click1');
	};
	const onName2 = () => {
		setName('click2');
	};
	const onName3 = () => {
		setName('click3');
	};
	return (
		<div>
			<h2>이름 : {name}</h2>
			<h2 style={{ color: color }}>컬러 : {color}</h2>
			{/* 함수 분리 후 호출 */}
			<p>
				<button onClick={onName1}>btn1</button>
				<button onClick={onName2}>btn2</button>
				<button onClick={onName3}>btn3</button>
			</p>
			{/* 간단할 경우 한줄로 표현 */}
			<p>
				<button onClick={() => setColor('pink')}>pink</button>
				<button onClick={() => setColor('olive')}>olive</button>
				<button onClick={() => setColor('skyblue')}>skyblue</button>
			</p>
		</div>
	);
};

export default Test1;

/* 
    const [상태변수, 상태변수를 변경하는 함수] = useState(초기값)
    상태변수 = 초기값
    상태변수 = 상태변수를 변경하는 함수(값,수식)

    const [name, setName] = useState('아무개')
                                     숫자, 문자, 배열[], 객체{}, 논리값
    name = 아무개
    name = setName('홍길동') // -> name = 홍길동

*/
