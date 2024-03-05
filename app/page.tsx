"use client";
import React from "react";
import Header from "./page/header";
import Footer from "./page/footer";
import HomePicture from "./page/Home-picture";
import HeroInfo from "./page/HeroInfo";
import ZX9SPEAKER from "./page/ZX9SPEAKER";
import LinkHome from "./page/LinkHOME";
import ZX7SPEAKERTwo from "./page/ZX7SPEAKERTwo";
import YX1EARPHONES from "./page/YX1EARPHONES";
import HomeInformation from "./page/HomeInformation";
import useApiData, { ApiResponse } from "./servise/index";
import OnePicture from "../public/onepicture.png";

export default function Home() {
  const apiUrl3 = "http://localhost:4000/3";
  const apiUrl4 = "http://localhost:4000/4";
  const apiUrl5 = "http://localhost:4000/5";
  const apiUrl6 = "http://localhost:4000/0";

  const {
    data: data3,
    loading: loading3,
    error: error3,
  } = useApiData<ApiResponse>(apiUrl3);

  const {
    data: data4,
    loading: loading4,
    error: error4,
  } = useApiData<ApiResponse>(apiUrl4);
  const {
    data: data5,
    loading: loading5,
    error: error5,
  } = useApiData<ApiResponse>(apiUrl5);

  const {
    data: data6,
    loading: loading6,
    error: error6,
  } = useApiData<ApiResponse>(apiUrl6);

  const name3 = data3?.name || "XX99 Mark II Headphones";
  const name4 = data4?.name || "ZX7 Speaker";
  const name5 = data5?.name || "ZX9 Speaker";
  const name6 = data6?.name || "YX1 Wireless Earphones";
  const id3 = data3?.id || "4";
  const id4 = data4?.id || "5";
  const id5 = data5?.id || "6";
  const id6 = data6?.id || "1";
  return (
    <main className="Home-container">
      <div className="hero-container">
        <Header />
        <div className="hero">
          <HeroInfo name={name3} id={id3} />
          <HomePicture img={OnePicture} />
        </div>
      </div>
      <LinkHome />
      <ZX9SPEAKER name={name5} id={id5} />
      <ZX7SPEAKERTwo name={name4} id={id4} />
      <YX1EARPHONES name={name6} id={id6} />
      <HomeInformation />
      <Footer />
    </main>
  );
}
