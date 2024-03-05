import Cards from "../../components/card";
import logoone from '../../../public/image-removebg-preview(41) (1).png';
import logotwo from '../../../public/image-removebg-preview(38).png';
import logothree from '../../../public/image-removebg-preview(42).png';
export default function LinkHome() {
  return (
    <div className='LinkHome-container'>
        <Cards title='HEADPHONES' logo={logoone}  />
        <Cards title='SPEAKERS' logo={logotwo}  />
        <Cards title='EARPHONES' logo={logothree}  />
    </div>
  )
}
