import Image from 'next/image';
import './box.css';

export default function ClientBox({ clientImage}) {
   
  return (
    <div className="box-cl">
        <Image className='box-img' src={clientImage} alt="Client Logo"  height={100} width={100} />
    </div>
  )
}