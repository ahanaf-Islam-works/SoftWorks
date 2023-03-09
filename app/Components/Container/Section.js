export default function Section({ children, sectionId, classes }) {
    return (
    <section id={sectionId} className={`relative py-12 min-h-screen flex content-center ${classes}`}>    
    <div className="container m-auto max-w-screen-lg w-full px-7 ">


          {children}


    </div>
    </section>
    );
}