import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
const Modal = ({toggleModal,movieNum}) => {
    const { thumbUrl,movieNm,director} = movieNum
    return (
        <div className="modal">
            <div className="bg"></div>
            <div className="popup">
                <h3>{movieNm}</h3>
                <div>
                    <img src={thumbUrl} alt="" />
                </div>
                <strong>감독: {director} </strong>
                <p className="close"onClick={toggleModal}>
                    <AiOutlineCloseCircle />
                </p>
            </div>
        </div>
    );
};

export default Modal;