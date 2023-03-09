import SectionSm from "@/app/Components/Container/SectionSm";
import { faAppStore, faFacebook, faGooglePlay, faInstagram, faLinkedin, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuidv4 } from 'uuid';




export default function PlatformUsed() {
    const smList = [ faFacebook, faInstagram, faYoutube, faTwitter, faTiktok, faLinkedin, faGooglePlay, faAppStore];
    const iconSize = "3x";
    return (
        <SectionSm classes="m-auto">
            <div>
                <p className="text-center">
              Softworks marketing team is always ready to help you with your marketing needs in all social media platforms.
                </p>
            </div>
            <br />
            <br />
            <div className="grid grid-cols-4 gap-4 w-full px-4">
                {smList.map((icon) => (
                <span className="text-center" key={uuidv4()}>   
                <FontAwesomeIcon  icon={icon} size={iconSize}  /> </span>))}
            </div>
        </SectionSm>

    )}

