
export default function ContainerOne({children , classes}) {
    return (
    <div className={`grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-full gap-4 px-4 ${classes}`}>
        {children}
    </div>
)}



