import TreePicture from "../../../public/ThreePicture.png";
import ZX7SPEAKERTwoInfo from "./ZX7SPEAKERTwoInfo";
import HomePicture from "../Home-picture";
export default function ZX7SPEAKERTwo({name, id}) {
  return (
    <div className="ZX7SPEAKERTwo-container">
      <div className="ZX9SPEAKERtwo-Main">
      <ZX7SPEAKERTwoInfo text={name} id={id} />

      </div>
    </div>
  );
}
