import Button from "../../components/Button"

export default function HeroInfo({name, id}) {
  return (
    <div className="heroInfo">
        <span>NEW PRODUCT   </span>
        <h1>
   {name.toUpperCase()}
        </h1>
        <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
<Button text='See Product' id={id} />
    </div>
  )
}
