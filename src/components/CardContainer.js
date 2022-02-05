import React from 'react';
import Card from './Card';

//receive menuItems loop through them and pass the data to Card
const CardContainer = ({menuItems}) => {
   
  return <section className='md:grid grid-cols-2 gap-6'>
     {menuItems.map(item=>{
       return  <Card key={item.id} data={item}/>
     })}
    
  </section>;
};

export default CardContainer;
