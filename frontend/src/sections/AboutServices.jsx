import FadeIn, { FadeInStagger, FadeInItem } from '../components/FadeIn'

export default function AboutServices() {
    const items = [
        {
            title: 'Publicação em poucos dias',
            desc: 'Do planejamento à entrega, seu site pode estar online em até 7 dias após a aprovação do projeto.',
        },
        {
            title: 'Comunicação sem intermediários',
            desc: 'Você acompanha o desenvolvimento diretamente com quem está construindo o seu site, garantindo mais agilidade e alinhamento durante todo o processo.',
        },
        {
            title: 'Suporte incluso',
            desc: 'Após a entrega, você conta com 30 dias de suporte para ajustes, orientações e acompanhamento, sem custos adicionais.',
        },
        {
            title: 'Preparado para o Google',
            desc: 'Estrutura otimizada com boas práticas de SEO para aumentar a visibilidade da sua empresa e facilitar que novos clientes encontrem seus serviços.',
        },
    ]

    return (
        <section
            id='about'
            className='
                flex flex-col items-center bg-blue-dark min-w-full h-full text-white
                pt-16 pb-12 mx-auto text-center
                sm:pb-20 sm:pt-32
            '>
            <div className='w-[85vw] md:w-full'>
                <FadeIn>
                <p className='text-sm font-bold text-gradient tracking-widest mb-3'>POR QUE A MTH CODE</p>
                <h2 className='
                    font-bold mt-2 text-3xl block
                    sm:text-4xl
                    md:text-5xl md:inline md:mt-10
                '>
                    <span className='text-blue-light'>Desenvolvido com foco no</span>{' '}
                    <span className='text-gradient text-3xl sm:text-4xl md:text-5xl'>
                        seu negócio
                    </span>
                </h2>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <div className='flex flex-col mb-10 mt-3 md:mt-6 md:mb-25'>
                        <h3 className='text-sm font-normal text-white/80 md:text-xl'>Na MTH Code, cada projeto é desenvolvido de forma personalizada, sem modelos genéricos ou soluções prontas.</h3>
                        <h3 className='text-sm font-normal text-white/80 md:text-xl'>O objetivo é criar um site que represente sua marca, transmita credibilidade e gere resultados reais.</h3>
                    </div>
                </FadeIn>

                <FadeInStagger stagger={0.1} className='grid grid-cols-1 mx-auto w-[85vw] lg:w-250'>
                    {items.map((item, index) => (
                        <FadeInItem key={index}>
                            <div className='
                                flex flex-col gap-3 px-4 py-5 rounded-2xl text-left
                                hover:bg-blue-light2/5 transition-colors duration-200
                                sm:flex-row sm:gap-8 sm:items-start
                            '>
                                <span className='
                                    text-blue-light2/60 font-bold text-4xl leading-none
                                    shrink-0 w-8
                                '>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className='flex flex-col gap-1 text-left'>
                                    <p className='text-base font-semibold sm:text-xl md:text-2xl'>{item.title}</p>
                                    <p className='text-white/70 text-sm md:text-base leading-relaxed'>{item.desc}</p>
                                </div>
                            </div>
                            {index < items.length - 1 && (
                                <hr className='border-blue-light2/15 mx-4' />
                            )}
                        </FadeInItem>
                    ))}
                </FadeInStagger>
            </div>
        </section>
    )
}
