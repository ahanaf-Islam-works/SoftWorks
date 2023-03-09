import './globals.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

export const metadata = {
  title: 'SoftWorks | Concept to Success',
  description: 'From concept to success: Your one-stop solution for digital design and marketing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   

      <body>
       <Navbar />
       
        {children}
        
        <Footer />
        </body>
    </html>
  )
}
