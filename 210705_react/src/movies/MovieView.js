import React from 'react';

const MovieView = ({movieNum,toggleModal}) => {
    const { thumbUrl,movieNm,openDt} = movieNum
    return (
        <div className="view" onClick={toggleModal}>
            <img src={thumbUrl} alt={movieNm} />
            <div>
                <h3>{movieNm}</h3>
                <ul>
                    <li><em>개봉일</em> {openDt} </li>
                    <li><em>제작상태</em>  </li>
                    <li><em>영화구분</em>  </li>
                    <li><em>관람등급</em>  </li>
                    <li><em>상영시간</em>  </li>
                    <li><em>제작국가</em>  </li>
                    <li><em>감독</em>  </li>
                    <li><em>장르</em>  </li>
                    <li><em>배급사</em>  </li>                    
                </ul>
            </div>

            
        </div>
    );
};

export default MovieView;