import dynamic from "next/dynamic"

import About from "./PageSections/HomeSections/About"
import CTA from "./PageSections/HomeSections/CTA"
import Hero from "./PageSections/HomeSections/Hero"
import Messege from "./PageSections/HomeSections/Messege"
import PreviousClients from "./PageSections/HomeSections/PreviousClients"
const ClientReviews = dynamic(() => import("./PageSections/HomeSections/ClientReviews"));

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <CTA />
      <Messege />
      <ClientReviews />
      <PreviousClients />
    </main>
  )}
