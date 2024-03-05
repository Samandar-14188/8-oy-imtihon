"use client";
import { useRouter } from "next/navigation";

interface ButtonProps {
  text: string;
  id?: number;
}

export default function Button({ text, id }: ButtonProps) {
  const router = useRouter();

  function handleClick() {
    const targetId = id !== undefined ? id - 1 : -1;
    router.push(`/earphones/${targetId}`);
  }

  return <button onClick={handleClick}>{text}</button>;
}
