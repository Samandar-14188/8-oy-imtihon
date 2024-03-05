import HomePicture from "../Home-picture"
import ZX9SPEAKERInfo from "./info";
import TwoPicture from '../../../public/twoPicture.png'
export default function ZX9SPEAKER({name, id}) {
  return (
    <div className='ZX9SPEAKER-container'>
   <div className="ZX9SPEAKER-Main">
   <HomePicture img={TwoPicture}  />
     <ZX9SPEAKERInfo name={name} id={id} />
   </div>
     
    </div>
  )
}
