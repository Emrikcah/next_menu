import React from "react";
import Image from "next/image";

const Card = ({ data }) => {
   const { title, price, img, desc } = data;
   return (
      <section className="lg:flex lg:justify-between ">
         <div className="relative w-full lg:w-48 h-40 border-4 border-brown rounded" >
            <Image src={img} layout="fill" objectFit="cover" />
         </div>
         <div className="lg:w-80">
            <header className="flex">
            <h3>{title}</h3>
            <h3>${price}</h3>
            </header>
            <p>{desc}</p>
         </div>
      </section>
   );
};

export default Card;
