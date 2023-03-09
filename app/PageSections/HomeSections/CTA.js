import ContainerMain from "@/app/Components/Container/ContainerMain";
import ContainerTwo from "@/app/Components/Container/ContainerTwo";
import Link from 'next/link';



export default function CTA() {
return ( 
<section id="cta">   
<ContainerMain classes="dark:bg-slate-900">
   <ContainerTwo>
    <div className="dark:text-slate-300 mb-9">
        <h2>Do You Have a New Idea or Existing Digital Product to Improve?</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum possimus, suscipit commodi a sint unde eaque quam quis obcaecati voluptatibus pariatur veritatis et blanditiis saepe nostrum perspiciatis, repudiandae nisi quae?</p>
        <br />
        <Link className="btn-full sm:mb-5" href="/">Contact Us</Link>

    </div>
    
    <div className="lg:mt-0 md:mt-0 sm:mt-12">
       <div className="card-main">
       <h3 className="dark:text-slate-200">From Idea to Product</h3>
       <p>Create a digital product based on your industry knowledge with a high market adoption tailored to your audience's needs.</p>
       </div>

       <div className="card-main">
       <h3 className="dark:text-slate-200">Dedicated Team</h3>
       <p>Team of experts dedicated to your needs that we manage for you, or you take the lead with your in-house processes.</p>
       </div>
    </div>
    
   </ContainerTwo>     
</ContainerMain>
</section> 
)}
