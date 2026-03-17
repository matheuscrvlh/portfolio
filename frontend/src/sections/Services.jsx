import { Check } from 'lucide-react'

export default function Services() {
    return (
        <section 
            id='services'
            className='flex flex-col h-full items-center bg-linear-to-l from-(--color-blue-base) to-(--color-blue-dark) text-white pb-30'
        >
            <h2 className='text-5xl font-bold mt-15'>
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
            <div className='flex-col justify-items-center mb-16 mt-6'>
                <h3 className='text-xl font-normal text-white/80'>Escolha o plano ideal para o seu projeto. Todos os serviços incluem código limpo, design</h3>
                <h3 className='text-xl font-normal text-white/80'>estratégico e foco em resultados.</h3>
            </div>
            <div className='grid grid-cols-2 gap-8'>
                <div className='
                    w-150 h-full p-8
                    bg-(--color-blue-dark)/30 rounded-3xl
                    border border-(--color-blue-light2)/30
                '>  
                    <p className='text-3xl font-bold text-white/90 mb-2'>Site Institucional</p>
                    <div className='flex gap-3 mb-6'>
                        <p className='text-4xl font-bold text-white/70'>R$ 600</p>
                        <p className='text-lg font-semibold text-white/50 line-through mt-auto'>R$ 1.000</p>
                    </div>
                    <p className='text-white/60 mb-5'>Ideal para quem precisa de um site institucional simples, mas com aparência profissional, estrutura leve, responsiva e otimizada para SEO.</p>
                    <div className='flex flex-col gap-2 font-semibold text-lg text-white/90 mb-10'>
                        <div className='flex gap-3'>
                            <Check />
                            <p>Design responsivo e moderno</p>
                        </div>
                        <div className='flex gap-3'>
                            <Check />
                            <p>Até 5 páginas</p>
                        </div>
                        <div className='flex gap-3'>
                            <Check />
                            <p>Otimização para SEO</p>
                        </div>
                        <div className='flex gap-3'>
                            <Check />
                            <p>Formulário de contato</p>
                        </div>
                        <div className='flex gap-3'>
                            <Check />
                            <p>Integração com redes sociais</p>
                        </div>
                    </div>
                    <button className='w-full rounded-lg border border-(--color-blue-light2)/30 p-2 font-semibold cursor-pointer hover:border-(--color-blue-light2)/10'>Solicitar Orçamento</button>
                </div>
                <div className='
                    w-150 h-full p-8 scale-107
                    bg-(--color-blue-dark)/30 rounded-3xl
                    border border-(--color-blue-light2)
                '>  
                    <p className='bg-(--color-blue-light2) p-2 w-35 rounded-full font-bold text-center text-sm mb-5'>RECOMENDADO</p>
                    <p className='text-3xl font-bold text-white/90 mb-2'>Site Personalizado</p>
                    <div className='flex gap-3 mb-6'>
                        <p className='text-4xl font-bold text-white/70'>R$ 1.200</p>
                        <p className='text-lg font-semibold text-white/50 line-through mt-auto'>R$ 1.600</p>
                    </div>
                    <p className='text-white/60 mb-5'>Um projeto personalizado, com mais páginas, recursos adicionais e foco em conversão. Design 100% sob medida para o seu negócio.</p>
                    <div className='flex flex-col gap-2 font-semibold text-lg text-white/90 mb-10'>
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
                            <p>SEO avançado</p>
                        </div>
                        <div className='flex gap-3'>
                            <Check />
                            <p>Blog ou portfólio</p>
                        </div>
                        <div className='flex gap-3'>
                            <Check />
                            <p>Animações e interações</p>
                        </div>
                        <div className='flex gap-3'>
                            <Check />
                            <p>Foco em conversão</p>
                        </div>
                        <div className='flex gap-3'>
                            <Check />
                            <p>Suporte prioritário</p>
                        </div>
                    </div>
                    <button className='w-full rounded-lg bg-(--color-blue-light2) p-2 font-semibold cursor-pointer hover:bg-(--color-blue-light2)/90'>Solicitar Orçamento</button>
                </div>
            </div>

        </section>
    )
}