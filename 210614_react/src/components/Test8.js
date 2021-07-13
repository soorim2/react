import React, { useState } from 'react';
import './Test7.css';
import movies from '../assets/api/movie';
const Test8 = () => {
	const [data, setData] = useState(movies);
	return (
		<div className="gallery">
			<h2>영화 목록</h2>
			<div className="con-box">
				{data.map((item, index) => (
					<article key={item.no}>
						<img src={item.poster}></img>
						<h3>{item.title}</h3>
						<p>감독 : {item.director} </p>
						<p>배우 : {item.actor} </p>
						<p>개봉일 : {item.date}</p>
					</article>
				))}
			</div>
		</div>
	);
};

export default Test8;
