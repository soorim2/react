import React, { useState, useEffect } from 'react';

const dataList = [
   {id:1, name:'chk1', text:'이용약관(필수)', isChecked:false},
   {id:2, name:'chk2', text:'개인정보처리방침(필수)', isChecked:false},
   {id:3, name:'chk3', text:'이벤트,프로모션,쿠폰 수신동의(선택)', isChecked:false}
]

const Test1 = () => {
   // const [users, setUsers] = useState(dataList)
   const [users, setUsers] = useState([])

   const changeInput = (e) =>{
      const {name,checked} = e.target

      if(name === 'all'){
         //맵으로 돌려서 뿌려줌
         const tempChk = users.map(user => {
            return{
               ...user, isChecked:checked
            }
         })
         setUsers(tempChk)
      }else{
         const tempChk = users.map(user=>user.name===name ? {...user, isChecked:checked} : user) 
         setUsers(tempChk)
         //user.name과 선택한 name이 같으면 user.isChecked를 checked(현재 e.target상태값)으로 변경
      }

   }

   useEffect(()=>{
      setUsers(dataList) 
   },[dataList]) //데이터를 불러오는 방법 2 처음부터 뿌려주느냐,아니냐
   return (
      <div style={{margin:30}}>
        <h2>동의 설정</h2>
        <p>
           <input type="checkbox" name="all" onChange={changeInput} checked={users.filter(user=>user.isChecked !== true).length<1}/>
           {/*user의 isChecked가 false인게 한개라도 있다면 */}
           전체동의
        </p>
        <hr/>
        {
           users.map(user=>
            <div key={user.id}>
               <input type="checkbox" name={user.name} checked={user.isChecked} onChange={changeInput}/>
               <label>{user.text}</label>
            </div>
           )
        }
      </div>
   );
};

export default Test1;