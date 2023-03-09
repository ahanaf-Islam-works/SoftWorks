import Card from "@/app/Components/Card/Card";

import marketing from "@/public/images/marketing.jpg";
import development from "@/public/images/development.jpg";
import creative from "@/public/images/creative.jpg";
import stratergy from "@/public/images/strategy.jpg"

const image_marketing = marketing;
const marketing_link = "/";
const marketing_link_text = "Turbo charge your marketing";
const marketing_text = "The marketing landscape is crowded with organizations making noise—but, the solution isn’t to be louder. You need to be in the right place at the right time to reach your audience. We can help you find the people who are already listening.";
const Marketing_header = "Marketing"; 

const image_development = development;
const development_link = "/";
const development_link_text = "Bring your ideas to life";
const development_text = "Your online platforms need to work for your business, showing your audience what you can do for them. Great design combined with user-friendly features creates a compelling digital experience.What we build works as good as it looks.";
const development_header = "Development"; 

const image_creative = creative;
const creative_link = "/";
const creative_link_text = "Desinging for you and your audience";
const creative_text = "Great creative shapes how you’re perceived; expressing who you are, why you’re different, and why people should care. The result is a user-centric identity illustrating the values and story that make your brand unique.";
const creative_header = "Creative"; 

const image_stratergy = stratergy;
const stratergy_link = "/";
const stratergy_link_text = "Get on the right path";
const stratergy_text = "The right strategy will drive your business forward. Starting with an immersive discovery process, we get to know your company and understand your goals. Then, we map out a strategy that will achieve those goals in the smartest way possible.";
const stratergy_header = "Stratergy";




export default function HowItWorks() {
  


return (
<>
<Card
    header={Marketing_header}
    paragraph={marketing_text}
    link={marketing_link}
    link_text = {marketing_link_text}
    image={image_marketing}
/>

<Card
    header={development_header}
    paragraph={development_text}
    link={development_link}
    link_text = {development_link_text}
    image={image_development}
/>

<Card
    header={creative_header}
    paragraph={creative_text}
    link={creative_link}
    link_text = {creative_link_text}
    image={image_creative}
/>

<Card
    header={stratergy_header}
    paragraph={stratergy_text}
    link={stratergy_link}
    link_text = {stratergy_link_text}
    image={image_stratergy}
/>
</>
    )
}


