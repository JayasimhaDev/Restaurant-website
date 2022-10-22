import React from 'react'
import Navbar from './Navbar';
import Menuapi from '../Api/Menuapi';
import { useState } from 'react';

const Menu = () => {
    const [menu, setMenu] = useState(Menuapi[0].items);
 
   
const filterit=(e)=>{
    if(e==="all"){
        setMenu(Menuapi[0].items)
    }else{
        setMenu(Menuapi[0].items.filter((item)=>{
            return item.category===e;
        }))
    }
}

  return (
    <div className='menu-div-container'>
        <Navbar/>
         <div className='menu-div-section'>
          <div className='item-div-main-container'>
             <div className='ul-item-navbar'>
               <ul>
               <li value='all' onClick={()=>{filterit('all')}}>All</li>
                <li value='hotdrinks' onClick={()=>{filterit('hotdrinks')}}>Hot Drinks</li>
                <li value='colddrinks' onClick={()=>{filterit('colddrinks')}}>Cold Drinks</li>
                <li value='pizzas' onClick={()=>{filterit('pizzas')}}>Pizzas</li>
                <li value='food' onClick={()=>{filterit('food')}}>Food</li>
               </ul>
             </div>
             <div className='div-item-menu-container'>
                {
                  menu.map((item)=>{
                    return(
                    <div className='img-price-name-div'>
                      <div>
                      <img src={item.url}/>
                      </div>
                      <div className='name-price-div'>
                        <h2>{item.name}</h2>
                        <div className='flex-price-rs'>
                         <h3>Price</h3>
                        <h3>Rs:&nbsp;&nbsp;{item.price}</h3>
                        </div>
                      </div>
                    </div>
                    );
                  }
                  )
                  
                }
             </div>
          </div>
         </div>
    </div>
  )
}

export default Menu;