import React from 'react'
import Menuapi from '../Api/Menuapi';
import { useState } from 'react';
import Navbar from './Navbar';

const Gallery = () => {
const[menu, setMenu] = useState(Menuapi[0].items);
  return (
    <div className='gallery-main-container'>
        <Navbar/>
     <div className='gallery-main-section'>
         <div className='gallery-sub-container'>
         {
                  menu.map((item)=>{
                    return(
                    <div className='img-price-name-div-ga'>
                      <div>
                      <img src={item.url}/>
                      </div>
                    </div>
                    );
                  }
                  )
                  
                }
         </div>
     </div>
    </div>
  )
}

export default Gallery;