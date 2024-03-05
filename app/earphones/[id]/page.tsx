'use client'
import React from 'react';
import Link from "next/link";
import Header from "../../page/header";
import LinkHome from "@/app/page/LinkHOME";
import Footer from "@/app/page/footer";
import HomeInformation from "@/app/page/HomeInformation";
import ProductsCards from "@/app/page/ProductsCards";
import NinePicture from "../../../public/twoPicture.png";
import OneCard from "../../../public/oneCard.png";
import Eigth from "../../../public/EigthPicture.png";
import ProductInfo from "@/app/page/ProductsInfo";
import BagroundCards from "@/app/page/bagroundCards";
import Earphonesimg1 from "../../../public/bg1.png";
import Earphonesimg2 from "../../../public/bg2.png";
import Earphonesimg3 from "../../../public/bg3.png";
import ProductsMain from "@/app/page/ProductsMain";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice'
import TenPicture from "../../../public//image-removebg-preview(42).png";

async function getProduct(id) {
  const res = await fetch(`http://localhost:4000/${id}`);
  const data = await res.json();
  return data;
}

export default async function Product({ params }) {
  const dispatch = useDispatch();
  const product = await getProduct(params.id);

  const handleAddToCart = () => {
    dispatch(addToCart({ id: product.id, name: product.name, price: product.price, img: product.img }));
  };

  return (
    <div className="product-container">
      <Header />
      <main className="mainProducts-container">
        <Link href="/" className="Back">
          Go Back
        </Link>
        <ProductsMain
          img={TenPicture}
          title={product.name}
          paragraf={product.description}
          price={product.price}
          onClick={handleAddToCart}
          productId={product.id}
        />

        <ProductInfo
          paragraf1={product.features}
          text1="Earphone Unit"
          text2="Multi-size Earplugs"
          text3="User Manual"
          text4="USB-C Charging Cable"
          text5="Travel Pouch"
          number1="2x"
          number2="6x"
          number3="1x"
          number4="1x"
          number5="1x"
        />
        <BagroundCards
          img1={Earphonesimg1}
          img2={Earphonesimg2}
          img3={Earphonesimg3}
        />
        <div className="CardsProducts">
          <h1>you may also like</h1>
          <div className="Products-wrapper">
            <ProductsCards title="XX99 MARK I" id="3" img={OneCard} />
            <ProductsCards title="XX59" img={Eigth} id={"2"} />
            <ProductsCards title="ZX7 SPEAKER" img={NinePicture} id="5" />
          </div>
        </div>


        <LinkHome />
        <HomeInformation />
      </main>
      <Footer />
    </div>
  );
}
