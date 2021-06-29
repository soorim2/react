import React from 'react';
import GalleryItem from './GalleryItem'

const GalleryList = ({gallerys,img,onView}) => {
    const {image} = img
    return (
        <article>
            <img src={image} alt={image}/>
            <ul>
                {gallerys.map(gallery=>
                    <GalleryItem key={gallerys.id} gallery={gallery} onView={onView}/>
                )}
            </ul>
        </article>
        
    );
};

export default GalleryList;