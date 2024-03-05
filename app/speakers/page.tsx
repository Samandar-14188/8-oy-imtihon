"use client";
import Footer from '../page/footer'
import Header from '../page/header'
import PictureCards from './componets/PictureCard'
import InformationCard from './componets/Information'
import TwoPicture from '../../public/twoPicture.png'
import NinePicture from '../../public/NinePicture.png'
import useApiData, { ApiResponse } from "../servise/index";
import LinkHome from '../page/LinkHOME'
import HomeInformation from '../page/HomeInformation'
export default function page() {
  const apiUrl4 = "http://localhost:4000/4";
  const apiUrl5 = "http://localhost:4000/5";
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
   console.log("Olingan ma'lumotlar 4:", data4);
  console.log("Olingan ma'lumotlar 5:", data5);
 const id4 = data4?.id || '5'
  const category = data4?.category || "speakers";
  const name4 = data4?.name || "ZX7 Speaker";
  const description4 =
    data4?.description ||
    "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.";
  const name5 = data5?.name || "ZX7 Speaker";
  const id5 = data5?.id || '6'
  const description5 =
    data5?.description ||
    "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.";
  return (
    <div>
        <div className="hero-container-speakers">
<Header />
<h1>{category.toUpperCase()}</h1>
</div>
<div className="speakers-wrapper">
<PictureCards img={TwoPicture} />
<InformationCard text='NEW PRODUCT' title={name5} paragraf={description5} id={id5} />
</div>
<div className="speakers-wrapper">
<InformationCard  title={name4} paragraf={description4} id={id4} />
<PictureCards img={NinePicture} />

</div>
<LinkHome />
<HomeInformation />
<Footer />
    </div>
  )
}
