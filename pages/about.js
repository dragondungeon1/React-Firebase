import Middle from "../components/about/middle";
import Hero from "../components/hero";
import team from "/public/svg/team.svg"

export default function About() {
    return (
        <div>
            <Hero
            tag="about"
            img={team}
            />
            <Middle/>
        </div>
    )
}