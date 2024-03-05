import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Logo from "../../../public/audiophile.svg";

export default function Footer() {
  return (
    <footer>
      <div className="logo-footer">
        <Image src={Logo} alt="rasm" />
        <ul>
          <li>
            <Link href={"/"}>HOME</Link>
            <Link href={"/headphones"}>HEADPHONES</Link>
            <Link href={"/speakers"}>SPEAKERS</Link>
            <Link href={"/earphones"}>EARPHONES</Link>
          </li>
        </ul>
      </div>
      <div className="footer-main">
        <div className="footer-info">
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <span>Copyright 2021. All Rights Reserved</span>
        </div>
        <div className="footer-link">
          <Link href={"https://www.facebook.com"}>
            <FaSquareFacebook className="footerIcons" />
          </Link>
          <Link href={"https://www.twitter.com"}>
            <FaTwitter className="footerIcons" />
          </Link>
          <Link href={"https://www.instagram.com"}>
            <FaInstagram className="footerIcons" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
