import React, { useState } from 'react';
import './style.css'
import data from '../assets/api/image'

import GalleryList from './GalleryList'
import GalleryView from './GalleryView'

const Gallery = () => {
    const [gallerys,setGallerys]=useState(data)
    // const [img, setImg] =useState(gallerys[0])
    const [img, setImg] =useState(data[0])
    const onView = (id) => {
        // setImg(gallerys[id-1])
        //find / findIndex 
        // setImg( gallerys[gallerys.findIndex(item => item.id===id)])
        setImg( gallerys.find ( item => item.id === id))
    }
    return (
        <div className="con-box">
            <GalleryList gallerys={gallerys} img={img} onView={onView}/>
            <GalleryView img={img}/> 
        </div>
    );
};

export default Gallery;