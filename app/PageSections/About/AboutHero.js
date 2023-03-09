import ContainerTwo from "@/app/Components/Container/ContainerTwo"
import SectionSm from "@/app/Components/Container/SectionSm"
import MainLogo from "@/public/logo/SoftWorks [Converted]-01.jpg"
import Image from "next/image"


export default function AboutHero() {
    return (
        <SectionSm>
            <ContainerTwo>
                <div className="flex flex-col justify-center">
                    <h1>Hi, we're <br /> SoftWorks</h1>
                    <p>You put passion and pride into what you do. We like that about you. Scroll down and see why you should like us, too.</p>
                </div>
                <div>
                 <Image src={MainLogo} />
                </div>
            </ContainerTwo>
        </SectionSm>
    )
}
