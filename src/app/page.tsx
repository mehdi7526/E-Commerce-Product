"use client";
import React from "react";
import { products } from "@/utils/staticProducts";
import ProductCard from "@/components/ProductCard";

const HomePage: React.FC = () => {
  return (
    <div className=" flex flex-col gap-6 p-5">
      <span className=" text-2xl font-bold">Products</span>
      <div className=" grid lg:grid-cols-4 gap-5">
        {products.map((product, index) => (
          <ProductCard key={index} productInfo={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
