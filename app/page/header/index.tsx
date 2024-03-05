import Link from "next/link"
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
import   Dialog from '../../components/Dialog/index'
import Logo from '../../../public/audiophile.svg'

export default function Header() {

  return (
    <header >
        <Image src={Logo} alt="rasm" />
        <ul><li>
            <Link href={'/'}>HOME</Link>
            <Link href={'/headphones'}>HEADPHONES</Link>
            <Link href={'/speakers'}>SPEAKERS</Link>
            <Link href={'/earphones'}>EARPHONES</Link>
            </li></ul>
<Dialog />    
</header>
  )
}
