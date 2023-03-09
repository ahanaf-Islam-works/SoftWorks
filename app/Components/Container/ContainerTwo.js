
export default function ContainerTwo({children, classes}) {
    return (
    <div className={`grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 w-full px-4 z-10 ${classes}`}>
        {children}
    </div>
)}



