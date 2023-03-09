import Link from "next/link"
import Section from "@/app/Components/Container/Section"
import ContainerOne from "@/app/Components/Container/ContainerOne"
import Globe from "@/app/Components/Globe/Globe"


export default function Hero() {
    return (
      
      <Section sectionId="hero" classes="dark:bg-slate-900">
        <ContainerOne>
          <div className="z-50 text-center">
          <h1 className="dark:text-gray-300">From concept to success</h1>
          <p className="dark:text-gray-400">
            <br />
          <span>Soft</span><span className="bolded">WORKS</span> offers comprehensive services, from web design, SEO and social media management. We cover all aspects of creating an effective online business. We are a team of professionals with years of experience in the field of web design and online marketing. We are here to help you achieve your goals.
          </p>
          <br />
          <div className="flex lg:flex sm:block content-center justify-center">
          <Link className="btn-full" href="/"> Contact Us</Link>
          <Link className="btn-trans" href="/"> Learn More</Link>
          </div>
          </div>
         </ContainerOne>
      <Globe />
    </Section>

    )}