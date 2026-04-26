import bilde from "../assets/cat.png";

export default function Elstad() {
  return (
    <article className="elstad-card">
      <img src={bilde} alt="Picture of cat"></img>
      <h2>Christine Elstad</h2>
      <a href="mailto:chrisie@hiof.no">chrisie@hiof.no</a>
      <p>Bachelor i Digitale medier og design</p>
    </article>
  );
}
