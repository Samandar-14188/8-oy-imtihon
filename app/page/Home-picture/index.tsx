import Image from "next/image";
export default function HomePicture({img}) {
  return (
    <div className="Home-picture">
        <Image src={img} alt="rasm" />
    </div>
  )
}
