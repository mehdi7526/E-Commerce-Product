import React, { useState } from "react";

interface OptionsSelectorProps {
  sizes: string[];
  colors: string[];
  onOptionChange: (size: string, color: string) => void;
}

const OptionsSelector: React.FC<OptionsSelectorProps> = ({
  sizes,
  colors,
  onOptionChange,
}) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    onOptionChange(size, selectedColor);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    onOptionChange(selectedSize, color);
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="flex justify-between">
        <label>Size</label>
        <div className=" flex flex-row gap-2">
          {sizes.map((size, index) => (
            <button
              onClick={() => handleSizeChange(size)}
              key={index}
              className={`w-6 h-6 rounded-full text-xs border ${
                size == selectedSize && "bg-gray-200"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <label>Color</label>
        <div className=" flex flex-row gap-2">
          {colors.map((color, index) => (
            <button
              onClick={() => handleColorChange(color)}
              key={index}
              className={`w-6 h-6 rounded-full bg-${color}-500 border ${
                selectedColor == color && "border-black"
              }  p-1`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OptionsSelector;
