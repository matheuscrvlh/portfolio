import { MoveDownRight } from 'lucide-react'

export default function AboutServices() {
    return (
        <section 
            id='about'
            className='
                flex flex-col items-center bg-blue-dark min-w-full h-full text-white pt-5 pb-10 mx-auto text-center sm:pb-20 sm:pt-20
            '>
            <div className='
                w-[85vw]
                md:w-full
            '>
                <h2 className='
                    font-bold mt-6 text-4xl block
                    sm:text-5xl
                    md:text-5xl md:inline md:mt-10
                '>
                    <span className='text-blue-light'>
                        Qualidade que
                    </span>{" "}
                    <span className='
                        bg-linear-to-r 
                        from-blue-light
                        via-blue-light2 
                        to-blue-light
                        bg-size-[200%_200%]
                        animate-[gradient_5s_ease-in-out_infinite]
                        bg-clip-text text-transparent block text-4xl
                        sm:text-5xl
                        md:text-5xl md:inline
                    '>
                        Gera Resultado
                    </span>
                </h2>
                <div className='
                    flex flex-col justify-items-center mb-16 mt-3 md:mt-6 
                '>
                    <h3 className='text-md font-normal text-white/80 md:text-xl'>Sou desenvolvedor full-stack especializado em criar experiências digitais modernas,</h3>
                    <h3 className='text-md font-normal text-white/80 md:text-xl'>funcionais e impactantes.</h3>
                </div>
                <div className='
                    grid grid-cols-1 mx-auto gap-2 w-[85vw]
                    lg:w-250 sm:gap-5
                '>
                    <div className='flex flex-col gap-5 h-full p-3 items-center sm:p-4 sm:gap-10 lg:w-250 lg:flex-row'>
                        <p className='text-xl font-semibold sm:text-3xl sm:w-[40%]'>Design Estratégico</p>
                        <p className='text-white/75 w-auto text-sm sm:w-[50%] md:text-base'>Interfaces modernas que refletem a identidade da sua marca e priorizam a experiência do usuário, garantindo navegação intuitiva e visual profissional.</p>
                        <MoveDownRight className='hidden cursor-pointer lg:inline w-[10%]'/>
                    </div>
                    <hr className='border-blue-light2/40 w-[70%] mx-auto lg:w-230' />
                    <div className='flex flex-col gap-5 h-full p-3 items-center sm:p-4 sm:gap-10 lg:w-250 lg:flex-row'>
                        <p className='text-2xl font-semibold sm:text-3xl sm:w-[40%]'>Performance</p>
                        <p className='text-white/75 w-auto text-sm sm:w-[50%] md:text-base'>Sites rápidos, otimizados e preparados para todos os dispositivos, garantindo carregamento eficiente e melhor experiência para o usuário.</p>
                        <MoveDownRight className='hidden cursor-pointer lg:inline w-[10%]'/>
                    </div>
                    <hr className='border-blue-light2/40 w-[70%] mx-auto lg:w-230' />
                    <div className='flex flex-col gap-5 h-full p-3 items-center sm:p-4 sm:gap-10 lg:w-250 lg:flex-row'>
                        <p className='text-xl font-semibold sm:text-3xl sm:w-[40%]'>Resultado</p>
                        <p className='text-white/75 w-auto text-sm sm:w-[50%] md:text-base'>Soluções desenvolvidas para gerar impacto real, transformando presença digital em valor para o negócio.</p>
                        <MoveDownRight className='hidden cursor-pointer lg:inline w-[10%]'/>
                    </div>
                    <hr className='border-blue-light2/40 w-[70%] mx-auto lg:w-230' />
                    <div className='flex flex-col gap-5 h-full p-3 items-center sm:p-4 sm:gap-10 lg:w-250 lg:flex-row'>
                        <p className='text-xl font-semibold sm:text-3xl sm:w-[40%]'>Código Limpo</p>
                        <p className='text-white/75 w-auto text-sm sm:w-[50%] md:text-base'>Código organizado e escalável, seguindo boas práticas para garantir manutenção fácil e crescimento do projeto.</p>
                        <MoveDownRight className='hidden cursor-pointer lg:inline w-[10%]'/>
                    </div>
                    <hr className='border-blue-light2/40 w-[70%] mx-auto lg:w-230' />
                    <div className='flex flex-col gap-5 h-full p-3 items-center sm:p-4 sm:gap-10 lg:w-250 lg:flex-row'>
                        <p className='text-xl font-semibold sm:text-3xl sm:w-[40%]'>SEO</p>
                        <p className='text-white/75 w-auto text-sm sm:w-[50%] md:text-base'>Aplicações estruturadas para melhor indexação nos motores de busca, aumentando a visibilidade e alcance do projeto na internet.</p>
                        <MoveDownRight className='hidden cursor-pointer lg:inline w-[10%]'/>
                    </div>
                </div>
            </div>
        </section>
    )
}