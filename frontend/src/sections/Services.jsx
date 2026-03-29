import { Check } from 'lucide-react'

export default function Services() {
    return (
        <section 
            id='services'
            className='
                flex flex-col h-full items-center bg-linear-to-l from-blue-base to-blue-dark text-white pt-5 pb-20 text-center sm:pb-30 sm:pt-20
            '>
            <div className='
                w-[85vw]
                md:w-full 
            '>
                <h2 className='
                    font-bold mt-10 text-4xl block
                    sm:text-5xl
                    md:text-5xl
                    md:inline
                '>
                    <span className='text-blue-light'>
                        Meus
                    </span>{'  '}
                    <span className='
                        bg-linear-to-r 
                        from-blue-light 
                        via-blue-light2
                        to-blue-light
                        bg-size-[200%_200%]
                        animate-[gradient_5s_ease-in-out_infinite]
                        bg-clip-text text-transparent
                    '>
                        Serviços
                    </span>
                </h2>
                <div className='
                    flex-col justify-items-center text-center w-[85vw] mb-10 mt-3 mx-auto
                    xl:w-full md:mb-16 md:mt-6
                '>
                    <h3 className='text-md font-normal text-white/80 md:text-xl'>Escolha a melhor solução para o seu projeto. Todos os serviços são desenvolvidos com foco em</h3>
                    <h3 className='text-md font-normal text-white/80 md:text-xl'>performance, experiência do usuário e resultados reais.</h3>
                </div>
                <div className='
                    grid grid-cols-1 gap-15 w-[85vw] mx-auto
                    lg:grid-cols-2 lg:w-full lg:gap-8
                '>
                    <div className='
                        w-full h-full p-4 ml-auto
                        bg-blue-dark/30 rounded-3xl
                        border border-blue-light2/30
                        lg:w-[35vw] lg:max-w-150 lg:p-8
                    '>  
                        <p className='text-xl font-bold text-white/90 mb-2 sm:text-3xl'>Site Institucional Profissional</p>
                        <div className='flex gap-3 mb-6 mt-5 justify-center sm:justify-start sm:mt-0'>
                            <p className='text-2xl font-bold text-white/70 sm:text-4xl'>R$ 600</p>
                            <p className='text-lg font-semibold text-white/50 line-through mt-auto'>R$ 1.000</p>
                        </div>
                        <p className='text-white/60 mb-5 text-sm md:text-base'>Ideal para empresas ou profissionais que precisam de presença online com um site moderno, responsivo e otimizado para transmitir credibilidade.</p>
                        <div className='flex flex-col gap-2 font-semibold text-sm text-left text-white/90 mb-10 sm:text-lg'>
                            <div className='flex gap-3'>
                                <Check />
                                <p>Layout moderno e responsivo</p>
                            </div>
                            <div className='flex gap-3'>
                                <Check />
                                <p>Até 6 páginas</p>
                            </div>
                            <div className='flex gap-3'>
                                <Check />
                                <p>Otimização para SEO</p>
                            </div>
                            <div className='flex gap-3'>
                                <Check />
                                <p>Formulário de contato funcional</p>
                            </div>
                            <div className='flex gap-3'>
                                <Check />
                                <p>Integração com redes sociais</p>
                            </div>
                        </div>
                        <a href="https://wa.me/5522988114263" target='_blank' rel="noopener noreferrer">
                            <button className='w-full rounded-lg border border-blue-light2/30 p-2 font-semibold cursor-pointer hover:border-blue-light2/10'>
                                Solicitar Orçamento
                            </button>
                        </a>
                    </div>
                    <div className='
                        w-full h-full p-4 scale-107 mr-auto
                        bg-blue-dark/30 rounded-3xl
                        border border-blue-light2
                        lg:w-[35vw] lg:max-w-150 lg:p-8
                    '>  
                        <p className='bg-blue-light2 p-2 w-35 rounded-full font-bold text-center text-sm mb-5'>RECOMENDADO</p>
                        <p className='text-3xl font-bold text-white/90 mb-2'>Projeto Web Personalizado</p>
                        <div className='flex gap-3 mb-6 mt-5 justify-center sm:justify-start sm:mt-0'>
                            <p className='text-2xl font-bold text-white/70 sm:text-4xl'>R$ 1.200</p>
                            <p className='text-lg font-semibold text-white/50 line-through mt-auto'>R$ 1.600</p>
                        </div>
                        <p className='text-white/60 mb-5 text-sm md:text-base'>Solução completa e personalizada, pensada para gerar mais resultados, com design exclusivo e funcionalidades avançadas.</p>
                        <div className='flex flex-col gap-2 font-semibold text-sm text-left text-white/90 mb-10 sm:text-lg'>
                            <div className='flex gap-3'>
                                <Check />
                                <p>Design 100% personalizado</p>
                            </div>
                            <div className='flex gap-3'>
                                <Check />
                                <p>Até 10 páginas</p>
                            </div>
                            <div className='flex gap-3'>
                                <Check />
                                <p>Otimização avançada para SEO</p>
                            </div>
                            <div className='flex gap-3'>
                                <Check />
                                <p>Blog ou portfólio integrado</p>
                            </div>
                            <div className='flex gap-3'>
                                <Check />
                                <p>Animações e interações modernas</p>
                            </div>
                            <div className='flex gap-3'>
                                <Check />
                                <p>Suporte prioritário</p>
                            </div>
                        </div>
                        <a href="https://wa.me/5522988114263" target='_blank' rel="noopener noreferrer">
                            <button className='w-full rounded-lg bg-blue-light2 p-2 font-semibold cursor-pointer hover:bg-blue-light2/90'>
                                Solicitar Orçamento
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}