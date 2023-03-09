import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '../../public/logo/mainSoftworks.png';

const Logo = ({ color = 'light' }) => {
    const textColor = color === 'dark' ? 'dark:text-white' : 'dark:text-slate-900';    
    return (
        <Link href="/">
            <div className={`main_logo ${textColor}`}>
                <Image src={LogoImage} alt="SoftWorks Logo" width={50} height={50} />    
                <h3 className='ml-1'>SoftWorks</h3>
            </div>
        </Link>
    );
}

const LogoNoText = () => {
    return (
        <Link href="/">
            <div className="main_logo">
                <Image src={LogoImage} alt="SoftWorks Logo" width={50} height={50} />    
            </div>
        </Link>
    );
}

export { Logo, LogoNoText };
