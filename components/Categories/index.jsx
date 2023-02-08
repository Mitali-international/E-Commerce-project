import React from "react";
import Card from "../Card";

const Categories = () => {
  return (
    <section>
      <h2 className="text-center">Top Categories</h2>
      <div className="grid grid-rows-2">
        <Card type="category" img="img" name="name" />
      </div>
    </section>
  );
};

export default Categories;
