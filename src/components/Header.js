import React from "react";
import Categories from "./Categories";

//receive categories and filteredItems function and pass it to Categories
const Header = ({filteredItems,categories}) => {
   
   return (
      <header className="py-20">
         <div>
            <h1 className="capitalize text-4xl text-darkBlue font-bold text-center mb-1">our menu</h1>
            <div className="bg-brown w-20 h-1 mx-auto"></div>
         </div>
         <Categories categories={categories} filteredItems={filteredItems} />
      </header>
   );
};

export default Header;
