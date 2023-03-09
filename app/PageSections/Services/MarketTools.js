import SectionSm from "@/app/Components/Container/SectionSm";
import { v4 as uuidv4 } from 'uuid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArtstation, faBuffer, faHubspot, faMailchimp, faSalesforce, faTrello } from '@fortawesome/free-brands-svg-icons';



export default function MarketTools() {
    const smList = [ faMailchimp, faHubspot, faSalesforce, faBuffer, faTrello, faArtstation];
    const iconSizes = "3x";
    return (
        <SectionSm classes="m-auto">
            <div>
                <p className="text-center">
                We use the latest tools to help us deliver the best possible service to our clients.
                </p>
            </div>
            <br />
            <br />
            <div className="grid grid-cols-3 gap-8 w-full px-4">
                {smList.map((icons, index) => (
                <span className="text-center" key={uuidv4()}>   
                <FontAwesomeIcon  icon={icons} size={iconSizes}  /> </span>))}
            </div>
        </SectionSm>

    )}

