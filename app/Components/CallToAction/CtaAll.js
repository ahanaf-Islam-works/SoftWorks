import ContainerTwo from "../Container/ContainerTwo";
import SectionSm from "../Container/SectionSm";

export default function CtaAll() {
    return (
        <SectionSm classes="cta phero text-gray-200">
        <ContainerTwo >
            <div className="flex flex-col justify-center w-full h-full z-10">
            <h2 className="text-4xl font-bold">
                Contact Us
            </h2>
            <br />
            <p className="text-gray-200">
                We are here to help you. <br /> Please fill out the form and we will get back to you as soon as possible.
            </p>
            </div>

            <div className="z-10">
            <form action="">
                <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-lg
                 bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-opacity-50 mb-3" />
                <textarea name="" id=""  rows="5" placeholder="Requirements" className="w-full px-4 py-2 rounded-lg
                 bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-opacity-50"></textarea>
                <button type="submit" className='btn-full' style={{width: "100%"}}>Submit</button>
            </form>
            </div>
        </ContainerTwo>
        </SectionSm>
    );
    }