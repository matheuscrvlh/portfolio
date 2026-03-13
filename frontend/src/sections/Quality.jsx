export default function Quality() {
    return (
        <section className='flex flex-col items-center bg-(--color-blue-dark) min-h-full text-white'>
            <h2 className='text-(--color-blue-light) text-4xl font-bold mt-8'>Qualidade do Serviço</h2>
            <h3 className='text-md font-normal mb-10'>A qualidade do serviço que importa</h3>
            <div className='flex flex-col gap-15'>
                <div className='flex gap-10 h-10 p-4'>
                    <p className='text-3xl w-100'>Design Estratégico</p>
                    <p className='w-100'>Interface moderna que reflete a identidade da sua marca Cada projeto desenvolvido com foco na experiência do usuário</p>
                </div>
                <hr className='border-(--color-blue-light2)/40' />
                <div className='flex gap-10 h-10 p-4'>
                    <p className='text-3xl w-100'>Performance</p>
                    <p className='w-100'>Sites rápidos e otimizados para todos os dispositivos Cada projeto desenvolvido com foco na experiência do usuário</p>
                </div>
                <hr className='border-(--color-blue-light2)/40' />
                <div className='flex gap-10 h-10 p-4'>
                    <p className='text-3xl w-100'>Resultado</p>
                    <p className='w-100'>Cada projeto desenvolvido com foco na experiência do usuário Cada projeto desenvolvido com foco na experiência do usuário</p>
                </div>
                <hr className='border-(--color-blue-light2)/40' />
                <div className='flex gap-10 h-10 p-4'>
                    <p className='text-3xl w-100'>Código Estratégico</p>
                    <p className='w-100'>Cada projeto desenvolvido com foco na experiência do usuário Cada projeto desenvolvido com foco na experiência do usuário</p>
                </div>
            </div>
        </section>
    )
}