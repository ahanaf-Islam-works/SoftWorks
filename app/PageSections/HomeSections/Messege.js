import ContainerMain from "@/app/Components/Container/ContainerMain";
import Signeture from '@/public/team/ceo-sig.png';
import CEO from '@/public/team/placr-holder-person.jpg';
import Image from "next/image";


export default function Messege() {
    return (
<section id="ceo">            
<ContainerMain classes="">
     <div className="grid grid-cols-2 px-4">
        <div className="flex items-center justify-center">
            <div>
            <h3>A message from the CEO </h3>
            <br />
            <p>We're made up of some of the brightest minds on the web who humanize digital marketing. See how we do things and why you'll want to partner with us</p>
            <Image className="" src={Signeture} alt="signeture" width={150} />
            <p>CEO, SoftWORKS</p>
            </div>
        </div>

        <div className="flex justify-end">
            <div className="rounded-md sm:w-1/2 w-20 sm:h-full ">
            <Image  alt="CEO mesaage"  src={CEO} />
            </div>
        </div>
     </div>
</ContainerMain>
</section>
      
    )}