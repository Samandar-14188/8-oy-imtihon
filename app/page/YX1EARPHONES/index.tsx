import HomePicture from "../Home-picture";
import FourPicture from "../../../public/FourPicture.png";
import ZX7SPEAKERTwoInfo from "../ZX7SPEAKERTwo/ZX7SPEAKERTwoInfo";
export default function YX1EARPHONES({ name, id }) {
  return (
    <div className="YX1EARPHONES-container">
      <HomePicture img={FourPicture} />
      <ZX7SPEAKERTwoInfo text={name} id={id} />
    </div>
  );
}
