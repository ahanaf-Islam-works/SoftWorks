"use client"
"use strict"
import { useState } from 'react';
import SectionSm from '@/app/Components/Container/SectionSm';
import ContainerOne from '@/app/Components/Container/ContainerOne';

import CarouselBox from '@/app/Components/CaraouselBox/CarouselBox';
import placeholder from '@/public/images/strategy.jpg';

const dummyImage =  placeholder;
const dummyTitle = "Dummy Title";
const dummyText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, tempora vel sapiente quia atque sed dolore quas? Rem ad cum cupiditate, culpa consequuntur nihil ab aliquid repellat quisquam quaerat. Vitae."

const reviews = [
  {
    image: placeholder,
    title: "John Doe",
    description: 'SoftWorks allows me to thrive and contribute to high-quality work. SoftWorks allows me to thrive and contribute to high-quality work.'
  },
  {
    image: placeholder,
    title: 'jane Doe',
    description: "SoftWorks understood our needs and their developers were passionate, skilled and conscientious about the work and project goals. That's a level of involvement I haven't seen before – total partner engagement! "
  },
  {
    image: placeholder,
    title: 'Justin Doe',
    description: "Netguru has been the best agency we've worked with so far. Your team understands Keller and is able to design new skills, features, and interactions within our model, with a great focus on speed to market."
  }
];




const ClientReviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

      
      const nextSlide = () => {
        setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
      };



    return (
    setTimeout(() => {
            nextSlide();
            }, 5000),
        
        <>
      <SectionSm classes="dark:bg-slate-900"> 
        <ContainerOne>
            <h2></h2>
        <div className="slider">
      {reviews.map((review, index) => (
        <div 
          key={index}
          className={index === currentIndex ? 'slide active' : 'slide'}
        >
          <CarouselBox
            image={review.image}
            title={review.title}
            description={review.description}
          />
        </div>
      ))}

    

    </div>
        </ContainerOne>
        </SectionSm> 
        </>
      );
    };
export default ClientReviews;