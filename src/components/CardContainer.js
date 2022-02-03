import React from 'react';
import Card from './Card';


const CardContainer = ({data}) => {
   
  return <section className='md:grid grid-cols-2 gap-6'>
     {data.map(item=>{
       return  <Card key={item.id} data={item}/>
     })}
    
  </section>;
};

export default CardContainer;
