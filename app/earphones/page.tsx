"use client";
import React from "react";
import Header from "../page/header";
import Footer from "../page/footer";
import HomeInformation from "../page/HomeInformation";
import LinkHome from "../page/LinkHOME";
import PictureCards from "./components/PictureCards";
import InformationCard from "./components/InformationCard";
import useApiData from "../servise/index";
import TenPicture from "../../public/image-removebg-preview(42).png";

interface ApiResponse {
  id: number;
  slug: string;
  name: string;

  category: string;
}

export default function Page() {
  const apiUrl = "http://localhost:4000/0";
  const { data, loading } = useApiData<ApiResponse[]>(apiUrl);

  const category = data?.category ?? "EARPHONES";
  const name = data?.name ?? "YX1 WIRELESS EARPHONES";
  const id = data?.id || "1";
  const description =
    data?.description ??
    "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.";

  return (
    <div>
      <div className="hero-container-earphones">
        <Header />
        <h1>{category.toUpperCase()}</h1>
      </div>
      <div className="earphones-container">
        <PictureCards img={TenPicture} />
        <InformationCard
          title={name}
          paragraf={description}
          text="NEW PRODUCT"
          id={id}
        />
      </div>
      <LinkHome />
      <HomeInformation />
      <Footer />
    </div>
  );
}
