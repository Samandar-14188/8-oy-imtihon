import Image from "next/image"
import { GoChevronRight } from "react-icons/go";

export default function Cards({logo, title}) {
  return (
    <div className="cards-container">
        <Image src={logo} alt="rasm" />
        <div className="card">
  <h2>{title}</h2>
  <span>shop <GoChevronRight className="iconCard" />
</span>
        </div>
    </div>
  )
}
