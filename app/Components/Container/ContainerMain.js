export default function ContainerMain({ children, classes }) {
    return (

    <div className={` s relative py-10 ${classes}`}>
      <div className="max-w-screen-lg flex m-auto content-center px-6">

          {children}

      </div>  
    </div>

    );
}