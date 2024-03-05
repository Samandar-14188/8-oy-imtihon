"use client";
import React from "react";
import Footer from "../page/footer";
import Header from "../page/header";
import InformationCard from "./components/InformationCard";
import PictureCards from "./components/PictureCards";
import useApiData, { ApiResponse } from "../servise/index";
import HomeInformation from "../page/HomeInformation";
import LinkHome from "../page/LinkHOME";
import SixPicture from "../../public/SixPicture.png";
import SevenPicture from "../../public/oneCard.png";
import EigthPicture from "../../public/EigthPicture.png";

export default function HeadphonesPage() {
  const apiUrl1 = "http://localhost:4000/1";
  const apiUrl2 = "http://localhost:4000/2";
  const apiUrl3 = "http://localhost:4000/3";

  const {
    data: data1,
    loading: loading1,
    error: error1,
  } = useApiData<ApiResponse>(apiUrl1);
  const {
    data: data2,
    loading: loading2,
    error: error2,
  } = useApiData<ApiResponse>(apiUrl2);
  const {
    data: data3,
    loading: loading3,
    error: error3,
  } = useApiData<ApiResponse>(apiUrl3);

  const id = data1?.id || '2'
  const category = data1?.category || "HEADPHONES";
  const name = data1?.name || "XX59 Headphones";
  const description =
    data1?.description ||
    "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.";
  const name2 = data2?.name || "XX99 Mark I Headphones";
  const id1 = data2?.id || '3'

  const description2 =
    data2?.description ||
    "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.";
  const name3 = data3?.name || "XX99 Mark II Headphones";
  const id2 = data3?.id || '4'
  const description3 =
    data3?.description ||
    "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.";

  return (
    <div className="Headphones-container">
      <div className="hero-container-headphones">
        <Header />
        <h1>{category.toUpperCase()}</h1>
      </div>
      <div className="Headphones-wrapper">
        <PictureCards img={SixPicture} />
        <InformationCard
          text="NEW PRODUCT"
          title={name}
          paragraf={description}
          id={id}
        />
      </div>
      <div className="Headphones-wrapper">
        <InformationCard title={name2} paragraf={description2}  id={id1} />
        <PictureCards img={SevenPicture} />
      </div>
      <div className="Headphones-wrapper">
        <PictureCards img={EigthPicture} />
        <InformationCard
          title={name3}
          paragraf={description3}
          id={id2}
        />
      </div>
      <LinkHome />
      <HomeInformation />
      <Footer />
    </div>
  );
}
