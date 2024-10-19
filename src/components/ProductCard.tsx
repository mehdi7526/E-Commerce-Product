import { Product } from "@/utils/staticProducts";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  productInfo: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ productInfo }) => {
  return (
    <Link
      href={`/product/${productInfo.id}`}
      className="flex flex-col gap-5 items-center bg-white w-full border rounded-lg justify-between p-6 shadow-lg"
    >
      <img
        src={productInfo.imageUrl}
        alt={productInfo.name}
        className="w-48 h-64 object-cover hover:scale-110 transition-all duration-200"
      />
      <div className="mt-6 lg:mt-0 lg:ml-6 self-start">
        <h1 className="text-2xl font-bold">{productInfo.name}</h1>
        <p className="text-lg text-gray-500 mt-2">{productInfo.price}</p>
        <p className="mt-4">{productInfo.description}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
