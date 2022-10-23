import React from "react";

const Categories = ({ filteredCategories, categories }) => {
  return (
    <div className="filter-container flex bg-amber-400 space-x-2 items-center justify-evenly ">
      {categories.map((c, idx) => {
        return (
          <button key={idx} type="button" onClick={() => filteredCategories(c)}>
            {c}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
