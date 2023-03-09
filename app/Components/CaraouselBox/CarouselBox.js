import './box.css';
import Image from 'next/image';

export default function CarouselBox ({ image, title, description }) {

        return (
        <div className='flex'>
        <Image className='rounded-full mr-7 box__image' src={image} alt={title} />
         <div className='flex content-center justify-center'>

         <p className='text-white'><span className='text-3xl '>{title} <br /> </span>
           {description}
         </p></div>
         </div>

        );};

