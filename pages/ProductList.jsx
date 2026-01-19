import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAPI } from "../src/redux/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchAPI());
  }, [dispatch]);

  if (!products) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="p-24 flex flex-col justify-center items-center">
      <h2 className="font-bold text-3xl">Product List</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.map((p) => (
        <div key={p.id} className="border rounded-2xl p-8">
          <img src={p.image} alt="" className="w-48" />
          <h4>{p.title}</h4>
          <p>Price: ${p.price}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProductList;
