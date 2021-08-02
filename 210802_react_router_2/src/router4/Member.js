import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Member = ({item}) => {
    const {id, name, email } = item

    const history = useHistory()
    //history.push(url)

    const style = {
        border : '1px solid tomato',
        padding:20,
        margin:10,
        borderRadius:15
    }

    const onGo = () => {
        const url = `/member/${id}`
        history.push(url)
    }
    return (
        <div style={style}>
            <p>ID : {id}</p>
            <h3>이름 : {name}</h3>
            <p>E-Mail : {email}</p>
            <p>
                {/* Link로 이동하는 방법 */}
                <Link to={`/member/${id}`}>자세히 보기 : {name}</Link>
                {/*  <Route path="/member/:memberID"><MemberDetail/></Route> 에 저장 */}
            </p>
            <p>
                {/* 클릭이벤트로 이동하는 방법 */}
                <button onClick={onGo}>상세 페이지 이동</button>
            </p>
        </div>
    );
};

export default Member;