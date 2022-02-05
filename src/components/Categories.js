import React from "react";

const Categories = ({ filteredItems, categories }) => {
   return (
      <div className="flex justify-center mt-6">
         {categories.map((category, index) => {
            return (
               <button key={index} type="button" className="btn" onClick={() => filteredItems(category)}>
                  {category}
               </button>
            );
         })}
      </div>
   );
};

export default Categories;
