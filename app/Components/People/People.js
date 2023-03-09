import Image from 'next/image';
import './people.css';

export default function People({single, name}) {

    return(
        <div className="single drop-shadow-lg text-center">
            <Image src={single} alt="Picture of the author" width={500} height={500} />
            <h3>{name}</h3>
        </div>    
    )  
}