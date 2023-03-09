import SectionSm from "@/app/Components/Container/SectionSm";
import { faAndroid, faAngular, faApple, faDocker, faFigma, faLaravel, faNode, faReact, faShopify, faSketch, faStripe, faSwift, faUnity, faVuejs, faWix, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuidv4 } from 'uuid';





export default function TechUsed() {
    const iconListT = [faWordpress, faShopify, faWix, faLaravel, faNode, faReact, faVuejs, faAngular, faSwift, faApple, faAndroid, faUnity, faDocker, faStripe, faSketch, faFigma];
    const iconSizez = "4x";
    return (
        <SectionSm sectionId="TechUsed" classes="">
            <div>
                <p className="text-center">We use the latest technologies to build your Ideas.</p>
            </div>
            <br />
            <br />
            <div className="grid grid-cols-4 lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-4 px-4 gap-4 w-full m-auto">
                {iconListT.map((iconz, index) => (
                <span className="gradient-text" key={uuidv4()}>   
                <FontAwesomeIcon icon={iconz} size={iconSizez} /> </span>))}
            </div>
        </SectionSm>

    )}

