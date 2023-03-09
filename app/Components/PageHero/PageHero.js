import ContainerOne from '../Container/ContainerOne';
import SectionSm from "../Container/SectionSm";
import './phero.css';

const PageHero = ({heroTitle, heroText}) => {
    return (
        <>
        <SectionSm classes="phero">
        <ContainerOne >

            <h1 className="hero-text">{heroTitle}</h1>
            <p className="hero-text">{heroText}</p>
        
        </ContainerOne>
        </SectionSm>
        
        </>    
        
        )}
export default PageHero;
