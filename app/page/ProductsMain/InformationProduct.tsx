import React from "react";
import ButtonCounter from "@/app/earphones/[id]/buttonCounter";
import ButtonToCart from "./components/button";

interface InformationCardProps {
  title: string;
  paragraf: string;
  text?: string;
  id?: number;
  price: number;
}

const InformationProduct: React.FC<InformationCardProps> = ({
  title,
  paragraf,
  text,
  id,
  price,
  onClick,
  productId,
}) => {
  return (
    <div className="InformationCard-container">
      <span>{text}</span>
      <h1>{title}</h1>
      <p>{paragraf}</p>
      <h2>${price}</h2>
      <div className="btn-wrapper">
        <ButtonCounter productId={productId} />
        <ButtonToCart text="ADD TO CART" onClick={onClick} />
      </div>
    </div>
  );
};

export default InformationProduct;
