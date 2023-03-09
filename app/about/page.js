import CtaAll from "../Components/CallToAction/CtaAll"
import AboutDetails from "../PageSections/About/AboutDetails"
import AboutHero from "../PageSections/About/AboutHero"
import CountNumber from "../PageSections/About/CountNumber"


export const metadata = {
    title: 'About | SoftWorks',
    description: 'From website design to digital marketing, our team of experts is here to provide you with the best service and 24/7 support.',
  }

export default function Services() {
    return (
        <>
        <AboutHero />
        <AboutDetails />
        <CountNumber />
        <CtaAll />
        </>

    )}