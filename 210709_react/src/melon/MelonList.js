import React from 'react';
import './MelonList.css'
import MelonItem from './MelonItem';

const MelonList = ({musics,onLike}) => {
    return (
        <div className="MelonList">
            <table>
                <colgroup>
                    <col className="w1"></col>
                    <col className="w2"></col>
                    <col className="w3"></col>
                    <col className="w4"></col>
                    <col className="w5"></col>
                    <col className="w6"></col>
                </colgroup>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>곡(가수)</th>
                        <th>앨범</th>
                        <th>좋아요</th>
                        <th>동영상</th>
                        <th>상승/하락</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        musics.map(music=>
                        <MelonItem key={music.id} music={music} onLike={onLike}/>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MelonList;