import ContainerTwo from "@/app/Components/Container/ContainerTwo";
import SectionSm from "@/app/Components/Container/SectionSm";
import servImg from '@/public/images/service-main.svg';
import Image from "next/image";


export default function ServiceVideo() {
  return (
    <SectionSm classes="dark:bg-slate-900">
      <ContainerTwo>
        <div className="flex flex-col justify-center w-full h-full">
          <h1 className="text-4xl font-bold text-gray-400">Our Services</h1>
          <p className="text-lg r text-gray-300 mt-5">
            With years of experience in supporting and growing businesses, we at
            SoftWorks offer you a comprehensive solution for your digital needs.
            From website design to digital marketing, our team of experts is
            here to provide you with the best service and 24/7 support. Trust us
            to take your business to the next level with our reliable and proven
            approach.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mt-10">
          <div className="w-full h-80 rounded-lg mb-5">
           <Image className="w-full h-fu" src={servImg} alt="service image" />
          </div>
        </div>
      </ContainerTwo>
    </SectionSm>
  );
}
