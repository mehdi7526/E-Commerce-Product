"use client";
import React from "react";
import { products } from "@/utils/staticProducts";
import ProductCard from "@/components/ProductCard";
import { ProductProvider } from "@/context/ProductContext";
import { findProductById } from "@/utils/findProduct";
import ProductDetail from "@/components/ProductDetail";
import OptionsSelector from "@/components/OptionsSelector";

interface Props {
  params: { productId: string };
}

const product: React.FC<Props> = ({ params }) => {
  // Find product with id 1
  const productDetail = findProductById(params.productId);

  return (
    <ProductProvider>
      <div className=" p-5 flex flex-col">
        {productDetail && <ProductDetail productInfo={productDetail} />}
      </div>
    </ProductProvider>
  );
};

export default product;
