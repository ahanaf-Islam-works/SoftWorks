export default function ContainerEight({children}) {
    return (

        <div className="grid grid-cols-4 lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-4 px-4 gap-4 w-full m-auto">
                {children}
        </div>

    )
}
