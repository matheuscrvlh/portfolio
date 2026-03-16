export default function Services() {
    return (
        <section className='flex flex-col h-full items-center bg-linear-to-l from-(--color-blue-base) to-(--color-blue-dark) h-dvh text-white'>
            <h2 className='text-5xl font-bold mt-10'>
                <span className='text-(--color-blue-light)'>
                    Meus
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
                    Serviços
                </span>
            </h2>

        </section>
    )
}