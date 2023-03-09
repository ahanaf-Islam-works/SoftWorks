import './footer.css';
import ContainerMain from '../Container/ContainerMain';
import {Logo} from '../Logo';

const Year = new Date().getFullYear();

const Footer = () => {
    return (
    
    <footer className='dark:bg-slate-900'>
        <ContainerMain>
        <div className="grid lg:grid-cols-3 px-8 gap-8">
          <div>
          <Logo color="dark" />
          <h3 className='mt-4 dark:text-gray-400'>From concept to success</h3>
          <p className='mt-4 dark:text-gray-400'>We offer a comprehensive range of services that cover all aspects of creating and maintaining a strong online presence.</p> 
          </div>

          <div>
           <h3 className='dark:text-gray-400'>Resources</h3>
             <div className='grid grid-cols-2'>
              <ul className='mt-7 dark:text-gray-400'>
                <li>Blog</li>
                <li>Case Studies</li>
                <li>Carrier</li>
                <li>Contact Us</li>
              </ul>
              <ul className='mt-7 dark:text-gray-400'>
                <li>FAQ</li>
                <li>Privacy Policy</li>
            </ul>
            </div> 
          </div>

          <div>
           <h3 className='text-white dark:text-gray-400'>Join Our Newsletter</h3>
            <div className='mt-7 dark:text-gray-400'>
                <form action="">
                <input type="text" placeholder="Enter your email" className='w-full px-4 py-2 rounded-lg
                 bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-opacity-50' />
                <button type="submit" className='btn-full' style={{width: "100%"}}>Subscribe</button>
                </form>
            </div>
          </div>

        </div> 

        </ContainerMain>
        <div className='border-t border-slate-800 py-8'>
            <p className='text-center dark:text-gray-400'>© {Year} All rights reserved.</p>
        </div>
        </footer>
   
    );
    }

export default Footer;    