import React from 'react';
import PropTypes from 'prop-types';
// https://ko.reactjs.org/docs/typechecking-with-proptypes.html#requiring-single-child

const Test6Sub = ({title,name,age,addr,tel,color,done}) => {
    return (
        // {}안에 템플릿리터럴 사용 시 벡틱₩으로 묶으멎
        <div style={{border:`1px solid ${color}`, padding:30, margin:30}}>
          <h2>{title}</h2> 
          <ul>
    <li>이름:{name}</li>
              <li>나이:{age}</li>
              <li>주소:{addr}</li>
              <li>전화번호:{tel}</li>
              <li>색상:{color}</li>
              <li>로그인여부:{done?'로그인':'로그아웃'}</li>
          </ul>
        </div>
    );
};
// PropType는 전달받은 데이터의 유효성을 검증하기 위해서 다양한 유효성 검사기(Validator)를 내보낸다.
// 타입스크립트 typescript는 위의 과정을 더 쉽게 해줌
// typescript로 선언하지 않는대신 propTypes을 선언해야하고, 이에 대한 에러가 뜰 때에는 초기 prop값을 정의
Test6Sub.propTypes = {
    name :PropTypes.string.isRequired,
    age : PropTypes.number.isRequired,
    addr : PropTypes.string,
    tel : PropTypes.string,
    color : PropTypes.string,
    done : PropTypes.bool
};
//props의 초깃값을 정의
Test6Sub.defaultProps = {
    name: '아무개',
    age : 20,
    addr :'주소 없음',
    tel : '010-0000-0000',
    color: `gray`,
    done : true
  };
export default Test6Sub;