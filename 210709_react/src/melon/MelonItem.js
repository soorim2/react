import React from 'react';
import Numeral from "numeral";
import { FcLikePlaceholder,FcLike } from "react-icons/fc";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { BiCaretUp,BiCaretDown } from "react-icons/bi";
const MelonItem = ({music,onLike,onOpen}) => {
    const {title,singer,poster,state,id,like,done,album,rank}=music
    return (
        <tr>
            <td>{rank}</td>
            <td className="img">
                <img src={poster} alt={title} width="60"/>
                <p>
                    <span>{title}</span>
                    <p>{singer}</p>
                </p>
            </td>
            <td>{album}</td>
            <td className="like">
                <i onClick={()=>onLike(id)}>
                    {
                        done? <FcLike/>:  <FcLikePlaceholder/>
                    }
                </i>
                {/* 천단위로 ,표시 */}
                {Numeral(like).format(0,0)}
            </td>
            <td><i onClick={()=>{onOpen(id)}}><HiOutlineVideoCamera/></i></td>
            <td>
                {
                    state === '상승' && <i><BiCaretUp color="red"/></i>
                }
                {
                    state === '하강' && <i><BiCaretDown color="dodgerblue"/></i>

                }
                {
                    state === '유지' && <i>-</i>

                }
                <span style={{marginLeft:10}}>{state}</span>
            </td>
        </tr>
    );
};

export default MelonItem;