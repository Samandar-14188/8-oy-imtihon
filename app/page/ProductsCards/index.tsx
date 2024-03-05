import Button from '@/app/components/Button'
import Image from 'next/image'
export default function ProductsCards({img, title, id}) {
  return (
    <div className='ProductCards'>
        <div className="imageCard">
            <Image src={img} alt='rasm' />
        </div>
        <h3>{title}</h3>
        <Button text='See Products' id={id} />
    </div>
  )
}
