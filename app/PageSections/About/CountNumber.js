'use client'
import ContainerThree from "@/app/Components/Container/ContainerThree";
import SectionSm from "@/app/Components/Container/SectionSm";
import { useEffect, useRef, useState } from "react";

export default function CountNumber() {

    const [numberOne, setNumberOne] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);
    const [numberThree, setNumberThree] = useState(0);
    
    const targetRef = useRef(null);
    
    useEffect(() => {
      const observer1 = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && numberOne < 48) {
          setTimeout(() => {
            setNumberOne(numberOne + 1);
          }, 100);
        }
      }, { threshold: 0.5 });
    
      const observer2 = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && numberTwo < 89) {
          setTimeout(() => {
            setNumberTwo(numberTwo + 1);
          }, 100);
        }
      }, { threshold: 0.5 });
    
      const observer3 = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && numberThree < 3) {
          setTimeout(() => {
            setNumberThree(numberThree + 1);
          }, 800);
        }
      }, { threshold: 0.5 });
    
      const targetElement = targetRef.current;
      observer1.observe(targetElement);
      observer2.observe(targetElement);
      observer3.observe(targetElement);
    
      return () => {
        observer1.unobserve(targetElement);
        observer2.unobserve(targetElement);
        observer3.unobserve(targetElement);
      };
    }, [numberOne, numberTwo, numberThree]);
    
    
    return(
    <SectionSm>
        <h2 className="text-center">The numbers add up in your favour</h2>
        <br />
        <br />
    <div ref={targetRef}>  
    <ContainerThree >
      <div className="text-center">
        <h3 className="text-3xl">{numberOne}</h3>
        <br />
        <p className="text-gray-500">Happy Clients</p>
      </div>

      <div className="text-center">
        <h3 className="text-3xl">{numberTwo}</h3>
        <br />
        <p className="text-gray-500 px-6">Clients just like you have found success working with us, and counting.</p>
      </div>  

      <div className="text-center">
        <h3 className="text-3xl">{numberThree}</h3>
        <br />
        <p className="text-gray-500 px-6">Years in business means your industry and the challenges you face likely aren't new to us.</p>
      </div>             
    </ContainerThree>
    </div>  
    </SectionSm>  
    )}