export default function SectionSm({ children, sectionId, classes }) {
    return (
    <section id={sectionId} className={`relative py-12 flex content-center ${classes}`}>    
    <div className="container m-auto max-w-screen-lg w-full px-7 ">


          {children}


    </div>
    </section>
    );
}