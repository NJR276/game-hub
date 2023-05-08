import React, { useState } from "react";
import { useEffect } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("fetching Products in ", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return (
    <>
      <div>productlist</div>
    </>
  );
};

export default ProductList;
