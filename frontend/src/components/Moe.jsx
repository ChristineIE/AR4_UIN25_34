
import profilbilde from "../assets/profilbilde.png"

export default function Moe() {
    return (
        <section className="km-info">
            <img src={profilbilde} alt="abstrakt bilde"></img>
            <h3>Kristine Moe</h3>
            <p><a href="mailto:krismoe@hiof.no">krismoe@hiof.no</a></p>
            <p>BA i Digitale medier og design</p>
        </section>
    )
}