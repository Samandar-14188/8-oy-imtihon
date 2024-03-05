import Image from "next/image";
export default function PictureCards({ img }) {
  return (
    <div className="PictureCard-container">
      <Image src={img} />
    </div>
  );
}
