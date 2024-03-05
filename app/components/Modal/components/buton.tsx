import Link from "next/link"
export default function ButtonModal(onClick) {
  return (
    
    <button onClick={onClick}>
       <Link href='/' > BACK TO HOME</Link>
    </button>

  )
}
