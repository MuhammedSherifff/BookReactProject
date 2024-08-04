import SuperQuality from "../sections/SuperQuality"
import Services from "../sections/Services";
import SpecialOffer from "../sections/SpecialOffer";

const AboutUs = () => {
    return (
        <>
            <section className="padding dark:bg-slate-950">
                <SuperQuality/>
            </section>
            <section className="padding dark:bg-slate-950">
                <Services/>
            </section>
            <section className="padding dark:bg-slate-950">
                <SpecialOffer/>
            </section>
        </>
    )
}

export default AboutUs