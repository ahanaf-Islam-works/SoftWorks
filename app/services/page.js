import CtaAll from "../Components/CallToAction/CtaAll"
import MarketTools from "../PageSections/Services/marketTools"
import PlatformUsed from "../PageSections/Services/PlatformUsed"
import ServiceSummery from "../PageSections/Services/ServiceSummery"
import ServiceVideo from "../PageSections/Services/ServiceVideo"
import TechUsed from "../PageSections/Services/TechUsed"
export const metadata = {
    title: 'SoftWorks | Services',
    description: 'From website design to digital marketing, our team of experts is here to provide you with the best service and 24/7 support. Trust us to take your business to the next level with our reliable and proven approach.',
  }

export default function Services() {
    return (
        <>
        <ServiceVideo />
        <ServiceSummery />
        <TechUsed />
        <PlatformUsed />
        <MarketTools />
        <CtaAll />
        </>

    )}