import ClientBox from "@/app/Components/Box/ClientBox";
import ContainerFour from "@/app/Components/Container/ContainerFour";
import SectionSm from "@/app/Components/Container/SectionSm";
import ACI from "@/public/clients/aci.png";
import Apex from "@/public/clients/apex.png";
import BeamAndBell from '@/public/clients/beam.png';
import Cocacola from "@/public/clients/coke.png";
import Ericson from "@/public/clients/ericson.png";
import Flextires from "@/public/clients/flextires.png";
import FullThrottle from "@/public/clients/Full throttle.png";
import Kaaz from "@/public/clients/kaaz.jpg";
import LeoMazzotti from "@/public/clients/leo.jpg";
import Mastercard from "@/public/clients/mastercard.png";
import NewZelandDairy from "@/public/clients/newZeland.png";
import Perfetti from "@/public/clients/perfetti.png";
import Pran from "@/public/clients/pran.png";
import RetroElectric from "@/public/clients/retro.jpg";
import RoshanTelecom from "@/public/clients/roshan.png";
import SuccessNGU from "@/public/clients/tree.png";

export default function PreviousClients() {
    return (
    <SectionSm sectionId="clients" classes="bg-gray-100">
        <h2 className="text-center">Clients that trust us</h2>
        <br /> <br /> 
    <ContainerFour>
        <ClientBox clientImage={Cocacola} />
        <ClientBox clientImage={ACI} />
        <ClientBox clientImage={Apex} />
        <ClientBox clientImage={BeamAndBell} />
        <ClientBox clientImage={Ericson} />
        <ClientBox clientImage={Flextires} />
        <ClientBox clientImage={Kaaz} />
        <ClientBox clientImage={LeoMazzotti} />
        <ClientBox clientImage={Mastercard} />
        <ClientBox clientImage={NewZelandDairy} />
        <ClientBox clientImage={Perfetti} />
        <ClientBox clientImage={Pran} />
        <ClientBox clientImage={RetroElectric} />
        <ClientBox clientImage={RoshanTelecom} />
        <ClientBox clientImage={SuccessNGU} />
        <ClientBox clientImage={FullThrottle} />
    </ContainerFour>
    </SectionSm>  
    )}    
       
