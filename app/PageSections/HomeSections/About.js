import Link from "next/link"
import Section from "@/app/Components/Container/Section"
import ContainerFour from "@/app/Components/Container/ContainerFour"
import ContainerTwo from "@/app/Components/Container/ContainerTwo"
import Services from "./Services"


export default function About() {
    return (
      
    <Section sectionId="about">
        <h2 >How SoftWorks</h2>
        <br />
        <p className="dark:text-gray-600">At Softworks, we believe that every great product starts with a great idea. Our experienced team of designers, developers, and project managers work closely with you to understand your vision and create a custom solution that meets your specific needs. From ideation to launch and beyond, we are committed to delivering high-quality products that exceed your expectations. Whether you're a startup or an established business, we're here to help you turn your ideas into reality. <Link className="dark:text-purple-500" href="/">Contact us</Link> Contact us today to start your project.</p>
     <ContainerFour classes="dark:text-purple-500 mt-10"> 
        <div className="title-card" count-id="1">
            <h3 className="text-2xl ml-3">It starts with a single idea.</h3>
        </div>

        <div className="title-card" count-id="2">
            <h3 className="text-2xl ml-3">Create brand that connect with culture.</h3>
        </div>

        <div className="title-card" count-id="3">
            <h3 className="text-2xl ml-3">Do things that move brands forward.</h3>
        </div>

        <div className="title-card" count-id="4">
            <h3 className="text-2xl ml-3">Develop products that resonate with the people.</h3>
        </div>
     </ContainerFour> 

        <br />
        <br />
     <h2 className="mt-10 ">Your goals, our services</h2>
     <br />
     <p>We are a full-service Digital agency that's been purpose-built to help businesses thrive in an increasingly complex landscape. <br /> <b>Impressive results for clients like you</b></p>
     <br />
     <br />

     <ContainerTwo>
        <Services />
     </ContainerTwo>
    </Section>

    )}