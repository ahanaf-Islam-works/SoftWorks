import ContainerThree from "@/app/Components/Container/ContainerThree";
import Section from "@/app/Components/Container/Section";
import TextLogoBox from "@/app/Components/TextLogoBox/TextLogoBox";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faCalendarTimes, faChartBar, faPenToSquare, faUser, faWindowMaximize } from "@fortawesome/free-regular-svg-icons";




const WebDev = {
    mainText: 'Web Design and Development',
    detailText: 'At SoftWorks, we provide custom web design and development services that will make your website stand out in a crowded digital landscape. Our team of experienced professionals will work with you to create a website that not only looks great but also functions seamlessly. We use the latest technologies and industry best practices to develop websites that are responsive, user-friendly, and optimized for search engines. Our front-end and back-end development services include HTML, CSS, JavaScript, and various frameworks such as WordPress, WooCommerce, React, Angular, Vue, NEXT, Django, and REMIX.',
    color: 'dark',
    faIcon: faWindowMaximize,
    
}

const Content  = {
    mainText: 'Content Creation',
    detailText: 'Creating high-quality, engaging content is crucial for building a strong online presence. At SoftWorks, we have a team of experienced content creators who can help you with everything from blog posts, articles, and social media posts to product descriptions, landing pages, and more. We also offer Content Management Services to help you keep your website or app updated with fresh content. Using the latest technologies such as GPT-3, we generate high-quality, engaging content that is relevant to your target audience.',
    color: 'dark',
    faIcon: faPenToSquare,
}

const SEO = {
    mainText: 'Search Engine Optimization (SEO)',
    detailText: 'Optimizing your website or app for search engines is crucial for driving more traffic to your website or app and improving your search engine rankings. Our team of SEO experts will work with you to optimize your website or app for search engines like Google, Bing, and Yahoo. We use a range of techniques including keyword research, on-page optimization, off-page optimization, and link building to improve your search engine rankings.',
    color: 'dark',
    faIcon: faGoogle,
}

const Dmarket = {
    mainText: 'Digital Marketing',
    detailText: 'Promoting your website or app on social media platforms like Facebook, Instagram, Twitter, Reddit, and YouTube is an effective way to reach a wider audience and increase engagement with your target audience. At SoftWorks, we specialize in creating and running effective social media campaigns, as well as managing your social media accounts to ensure your business stays in front of your target audience. We also provide video marketing services, video production, and video editing to help you create engaging content for your social media platforms.',
    color: 'dark',
    faIcon: faChartBar,
}

const AI = {
    mainText: 'Artificial Intelligence (AI)',
    detailText: 'At SoftWorks, we are always exploring new technologies that can help us provide even better services to our clients. We use Artificial Intelligence (AI) in various aspects of our services, from website and app development to content creation and digital marketing. We use AI to analyze data, automate repetitive tasks, and create personalized experiences for users. One of the cutting-edge AI technologies we use is GPT-3, which allows us to generate high-quality content with little to no human intervention. By using GPT-3, we can ensure that the content we produce is of the highest quality and relevant to your target audience.',
    color: 'dark',
    faIcon: faUser,
}

const Support = {
    mainText: '24/7 Support',
    detailText: "At SoftWorks, we understand that running a business can be a 24/7 job. That's why we offer industry-leading support to our clients. Our team of experts is available around the clock to answer any questions or concerns you may have. Whether it's a technical issue or a marketing question, we're here to help you every step of the way.",
    color: 'dark',
    faIcon: faCalendarTimes,
}

const ServiceSummery = () => {
    return (
    <Section>

        <h2 className="text-center">
        At SoftWorks, we are always exploring new technologies that can help us provide even better services to our clients. 
        </h2>
        <br /><br />

        <ContainerThree classes="mt-8">
                    <TextLogoBox {...WebDev} />
                    <TextLogoBox {...Content} />
                    <TextLogoBox {...SEO} />
                    <TextLogoBox {...Dmarket} />
                    <TextLogoBox {...AI} />
                    <TextLogoBox {...Support} />
        </ContainerThree>
    </Section>    

    



    )}
export default ServiceSummery;
