export default function ContainerFour({children , classes}) {
    return (
        <div className={`grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-8 px-4 w-full ${classes}`}>
            {children}
        </div>
    )
}
