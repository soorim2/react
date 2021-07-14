import React from 'react';
import './Modal.css'

const Modal = ({musicNum,onClose}) => {
    const {title,key,singer} = musicNum
    return (
        <div className="Modal">
            <div className="bg" ></div>            
            <div className="popup">
            <h2>제목: {title} </h2>
                <div>
                <iframe title="video" src={`https://www.youtube.com/embed/${key}`} frameBorder="0"></iframe>
                {/* <iframe title="video" src={`https://www.youtube.com/embed/${key}`} frameBorder="0"></iframe> */}
                </div>
                <p>가수 :{singer} </p>
                <span >
                    <i onClick={onClose}> X </i>
                </span>
         
            </div>
            {/* <div className="bg" onClick={onClose}></div>            
            <div className="popup">
                <h2>제목: {title} </h2>
                <div>
                <iframe  src={`https://www.youtube.com/embed/${key}`}frameborder="0"  ></iframe>
                </div>
                <p>가수 :{singer} </p>
                <span onClick={onClose}>
                    <i> X </i>
                </span>
            </div> */}
        </div>
    );
};

export default Modal;