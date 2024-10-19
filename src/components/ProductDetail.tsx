import { Product } from "@/utils/staticProducts";
import React from "react";
import OptionsSelector from "./OptionsSelector";
import Reviews from "./Reviews";

interface ProductDetailProps {
  productInfo: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productInfo }) => {
  return (
    <div className=" flex flex-col gap-5 p-4 bg-white">
      <div className="flex flex-col lg:flex-row lg:items-center items-start w-full gap-4 ">
        <img
          src={productInfo.imageUrl}
          alt={productInfo.name}
          className="h-64 self-center"
        />
        <div className="mt-6 lg:mt-0 lg:ml-6 w-full lg:w-auto">
          <h1 className="text-2xl font-bold">{productInfo.name}</h1>
          <p className="text-lg text-gray-500 mt-2">{productInfo.price}</p>
          <p className="mt-4">{productInfo.description}</p>
          <OptionsSelector
            sizes={productInfo.sizes}
            colors={productInfo.colors}
            onOptionChange={(size: string, color: string) =>
              console.log(`Selected Size: ${size}, Selected Color: ${color}`)
            }
          />
        </div>
      </div>
      <Reviews/>
    </div>
  );
};

export default ProductDetail;
