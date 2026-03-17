import { MoveDownRight } from 'lucide-react'

export default function AboutServices() {
    return (
        <section 
            id='about'
            className='flex flex-col items-center bg-(--color-blue-dark) h-full text-white pt-5 pb-20'
        >
            <h2 className='text-5xl font-bold mt-10'>
                <span className='text-(--color-blue-light)'>
                    Qualidade que
                </span>{" "}
                <span className='
                    bg-linear-to-r 
                    from-(--color-blue-light) 
                    via-(--color-blue-light2) 
                    to-(--color-blue-light)
                    bg-size-[200%_200%]
                    animate-[gradient_5s_ease-in-out_infinite]
                    bg-clip-text text-transparent
                '>
                    Gera Resultado
                </span>
            </h2>
            <div className='flex-col justify-items-center mb-16 mt-6'>
                <h3 className='text-xl font-normal text-white/80'>Sou desenvolvedor front-end especializado em criar experiências digitais modernas,</h3>
                <h3 className='text-xl font-normal text-white/80'>funcionais e impactantes. Uno design estratégico e código limpo para entregar sites que</h3>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-10 h-full p-4 items-center'>
                    <p className='text-3xl font-semibold w-100'>Design Estratégico</p>
                    <p className='w-100 text-white/75'>Interfaces modernas que refletem a identidade da sua marca e priorizam a experiência do usuário, garantindo navegação intuitiva e visual profissional.</p>
                    <MoveDownRight className='cursor-pointer'/>
                </div>
                <hr className='border-(--color-blue-light2)/40' />
                <div className='flex gap-10 h-full p-4 items-center'>
                    <p className='text-3xl font-semibold w-100'>Performance</p>
                    <p className='w-100 text-white/75'>Sites rápidos, otimizados e preparados para todos os dispositivos, garantindo carregamento eficiente e melhor experiência para o usuário.</p>
                    <MoveDownRight className='cursor-pointer'/>
                </div>
                <hr className='border-(--color-blue-light2)/40' />
                <div className='flex gap-10 h-full p-4 items-center'>
                    <p className='text-3xl font-semibold w-100'>Resultado</p>
                    <p className='w-100 text-white/75'>Soluções desenvolvidas para gerar impacto real, transformando presença digital em valor para o negócio.</p>
                    <MoveDownRight className='cursor-pointer'/>
                </div>
                <hr className='border-(--color-blue-light2)/40' />
                <div className='flex gap-10 h-full p-4 items-center'>
                    <p className='text-3xl font-semibold w-100'>Código Limpo</p>
                    <p className='w-100 text-white/75'>Código organizado e escalável, seguindo boas práticas para garantir manutenção fácil e crescimento do projeto.</p>
                    <MoveDownRight className='cursor-pointer'/>
                </div>
                <hr className='border-(--color-blue-light2)/40' />
                <div className='flex gap-10 h-full p-4 items-center'>
                    <p className='text-3xl font-semibold w-100'>SEO</p>
                    <p className='w-100 text-white/75'>Aplicações estruturadas para melhor indexação nos motores de busca, aumentando a visibilidade e alcance do projeto na internet.</p>
                    <MoveDownRight className='cursor-pointer'/>
                </div>
            </div>
        </section>
    )
}