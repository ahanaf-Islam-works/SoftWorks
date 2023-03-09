import ContainerFour from "@/app/Components/Container/ContainerFour"
import ContainerTwo from "@/app/Components/Container/ContainerTwo"
import SectionSm from "@/app/Components/Container/SectionSm"
import Image from "next/image"

import working from '@/public/images/working.jpeg'
import softworkAbt from '@/public/images/working.png'

import singleperson from '@/public/team/placr-holder-person.jpg'

import People from "@/app/Components/People/People"

const PersonName = "Jhon Doe";
const PersonDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, tempora vel sapiente quia atque sed dolore quas? Rem ad cum cupiditate, culpa consequuntur nihil ab aliquid repellat quisquam quaerat. Vitae."

export default function AboutDetails() {
    return (
    <>    
    <SectionSm>
        <ContainerTwo >
            <div className="">
                <Image src={softworkAbt}></Image>
            </div>
            <div className="flex justify-center flex-col">
                <h2>Unique approach</h2>
                <br />
                <p>Any good agency can deliver on the challenge you bring them. But, a strategic agency works with you to uncover the true reason behind your challenge, the one that is blocking your business's growth. <br /> <br /> At Major Tom, you’ll benefit from our four-phased approach. This method shows us your whole organization, allowing us to identify the best strategy, the tactics that will bring you success, and how you can improve upon that success.</p>
            </div>
        </ContainerTwo>
        </SectionSm> 

        <SectionSm>
        <ContainerTwo >
            <div className="flex justify-center flex-col">
                <h2>Service mix</h2>
                <br />
                <p>Consistency breeds confidence — make every touchpoint your audience experiences the same with our suite of service offerings. From Creative, to Strategy, Development and Marketing, take care of your holistic digital marketing needs in one place.<br /> <br /> Just looking for one, specific digital service? You can invest in one at a time, obligation-free.</p>
            </div>   
             
            <div className="">
                <Image src={working}></Image>
            </div>
        </ContainerTwo>
        </SectionSm>
        <SectionSm>
            <div className="text-center">
                <h2>Meet the team</h2>
                <br /><br />
            </div>
        <ContainerFour>
            <People single={singleperson} name={PersonName} descriptions={PersonDescription} />
            <People single={singleperson} name={PersonName} descriptions={PersonDescription} />
            <People single={singleperson} name={PersonName} descriptions={PersonDescription} />
            <People single={singleperson} name={PersonName} descriptions={PersonDescription} />
            <People single={singleperson} name={PersonName} descriptions={PersonDescription} />
            <People single={singleperson} name={PersonName} descriptions={PersonDescription} />
            <People single={singleperson} name={PersonName} descriptions={PersonDescription} />
            <People single={singleperson} name={PersonName} descriptions={PersonDescription} />
        </ContainerFour>
        </SectionSm>  
        </>
    )}