export default function AboutDev() {
    return (
        <section 
            id='aboutdev'
            className='flex flex-col items-center bg-(--color-blue-dark) h-full text-white pt-5 pb-20'
        >
            <h2 className='text-5xl font-bold mt-10'>
                <span className='text-(--color-blue-light)'>
                    Sobre
                </span>{'  '}
                <span className='
                    bg-linear-to-r 
                    from-(--color-blue-light) 
                    via-(--color-blue-light2) 
                    to-(--color-blue-light)
                    bg-size-[200%_200%]
                    animate-[gradient_5s_ease-in-out_infinite]
                    bg-clip-text text-transparent
                '>
                    Mim
                </span>
            </h2>
        </section>
    )
}