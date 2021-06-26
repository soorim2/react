import React from 'react';

const GalleryItem = ({gallery,onView}) => {
    const {id, image, title} = gallery
    return (
        <li onClick={()=>onView(id)}>
            <img src={image} alt={title}/>
        </li>
    );
};

export default GalleryItem;