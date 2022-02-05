import React from "react";
import Image from "next/image";

const Card = ({ data }) => {
   const { title, price, img, desc } = data;
   return (
      <section className="mb-10 sm:mb-0 lg:flex lg:justify-between ">
         <div className="relative w-full lg:w-48 h-40 border-4 border-brown rounded mb-5 lg:mb-0" >
            <Image src={img} alt={title} layout="fill" objectFit="cover" />
         </div>
         <div className="lg:w-80 divide-y divide-dashed divide-darkBlue">
            <header className="flex justify-between">
            <h3 className="text-darkBlue font-bold capitalize mb-1">{title}</h3>
            <h3 className="font-bold text-brown">${price}</h3>
            </header>
            <p className="text-liteBlue pt-4">{desc}</p>
         </div>
      </section>
   );
};

export default Card;
