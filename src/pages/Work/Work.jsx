import React, { useState } from "react";
import Cards from "../../components/Cards";

import cardData from "../../cardData";
import Categories from "../../components/Categories";
import "./work.css";

const Work = () => {
  const allCategories = ["all", ...new Set(cardData.map((cd) => cd.category))];

  const [menuItems, setMenuItems] = useState(cardData);
  const [categories, setCategories] = useState(allCategories);

  const filteredCategories = (category) => {
    if (category === "all") {
      setMenuItems(cardData);
      return;
    }
    const newCategories = cardData.filter(
      (newCategory) => newCategory.category === category
    );
    setMenuItems(newCategories);
  };

  return (
    <div className="h-full w-full   overflow-y-auto   ">
      <h1 className="text-center mt-2">Projects</h1>
      <Categories
        categories={categories}
        filteredCategories={filteredCategories}
      />
      <Cards cardData={menuItems} />
    </div>
  );
};

export default Work;
