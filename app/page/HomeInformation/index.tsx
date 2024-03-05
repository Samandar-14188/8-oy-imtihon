import HomePicture from "../Home-picture";
import FivePicture from '../../../public/FivePicture.png';
import Information from "./information";
export default function HomeInformation () {
  return (
    <div className="HomeInformation-container">
        <Information />
        <HomePicture img={FivePicture} />
    </div>
  )
}
