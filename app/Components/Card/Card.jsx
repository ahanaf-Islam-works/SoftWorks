import Image from "next/image"
import './card.css'
import Link from "next/link"

export default function Card({ header, paragraph, link, link_text, image }) {
return ( 

<Link href={link} >  
    <div className="card-part" data-title={header}>
            <Image className="card-image" alt={link_text} src={image} ></Image>
        <div className="card-body">
            <p className="text-gray-400">{paragraph}</p>
           <h3 className=" text-cyan-300">{link_text}</h3>
        </div>
    </div>
    </Link>    
)}
