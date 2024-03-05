import Button from "../../components/Button";

export default function ZX7SPEAKERTwoInfo({ text, id }) {
  return (
    <div className="ZX9SPEAKERTwoInfo">
      <h1>{text.toUpperCase()}</h1>
      <Button text="See Product" id={id} />
    </div>
  );
}
