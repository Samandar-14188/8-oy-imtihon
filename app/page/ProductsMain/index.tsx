import InformationProduct from "./InformationProduct";
import PictureCards from "@/app/headphones/components/PictureCards";

interface ProductsMainProps {
  img: string;
  paragraf: string;
  title: string;
  text: string;
  price: number;
}

const ProductsMain: React.FC<ProductsMainProps> = ({ img, paragraf, title, text, price, onClick, productId }) => {
  return (
    <div className="ProductsMain-wrapper">
      <PictureCards img={img} />
      <InformationProduct paragraf={paragraf} title={title} text={text} price={price} onClick={onClick} productId={productId} />
    </div>
  );
};

export default ProductsMain;
