import React, { useState } from 'react';
import './Test6.css';

const Test6 = () => {
	const [data, setData] = useState([
		{ id: 1, name: '이제훈', age: 30, addr: '서울', done: false },
		{ id: 2, name: '이솜', age: 20, addr: '제주', done: false },
		{ id: 3, name: '표예진', age: 10, addr: '경기', done: true },
		{ id: 4, name: '김의성', age: 40, addr: '부산', done: false },
		{ id: 5, name: '차지연', age: 25, addr: '경주', done: true },
		{ id: 6, name: '장혁진', age: 45, addr: '강원', done: false },
	]);
	return (
		<div className="wrap">
			<h2>모범택시 배우들</h2>
			<table>
				<colgroup>
					<col className="w1"></col>
					<col className="w2"></col>
					<col className="w3"></col>
					<col className="w4"></col>
					<col className="w5"></col>
				</colgroup>
				<thead>
					<tr>
						<th>번호</th>
						<th>이름</th>
						<th>나이</th>
						<th>주소</th>
						<th>참여여부</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.name}</td>
							<td>{item.age}</td>
							<td>{item.addr}</td>
							<td>{item.done ? '참여' : '불참'}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Test6;
