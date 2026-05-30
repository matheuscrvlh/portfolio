import { Check } from 'lucide-react'
import FadeIn, { FadeInStagger, FadeInItem } from '../components/FadeIn'

const plans = [
    {
        name: 'Essencial',
        badge: null,
        price: 'R$ 600',
        oldPrice: 'R$ 1.000',
        discount: '40% off',
        prazo: '7–10 dias',
        desc: 'Ideal para empresas ou profissionais que precisam de presença online moderna, responsiva e otimizada para transmitir credibilidade.',
        features: [
            'Layout moderno e responsivo',
            'Até 6 páginas',
            'Otimização para SEO',
            'Formulário de contato funcional',
            'Integração com redes sociais',
            'Garantia de 7 dias a ajustes',
        ],
        featured: false,
    },
    {
        name: 'Premium',
        badge: 'MAIS POPULAR',
        price: 'R$ 1.200',
        oldPrice: 'R$ 1.600',
        discount: '25% off',
        prazo: '7-15 dias',
        desc: 'Solução completa com design exclusivo e funcionalidades avançadas, pensada para gerar mais resultados para o seu negócio.',
        features: [
            'Design 100% personalizado',
            'Até 10 páginas',
            'SEO avançado',
            'Blog ou portfólio integrado',
            'Animações e interações modernas',
            'Prioridade na agenda',
            'Suporte prioritário',
            'Garantia de 7 dias a ajustes',
        ],
        featured: true,
    },
]

export default function Services() {
    return (
        <section
            id='services'
            className='flex flex-col h-full items-center bg-linear-to-l from-blue-base to-blue-dark text-white pt-16 pb-20 text-center sm:pt-24 sm:pb-28'
        >
            {/* Header */}
            <FadeIn className='w-[85vw] md:w-auto mb-12 md:mb-16'>
                <p className='text-sm font-bold text-gradient tracking-widest mb-3'>SERVIÇOS</p>
                <h2 className='font-bold text-4xl sm:text-5xl'>
                    <span className='text-blue-light'>Meus </span>
                    <span className='text-gradient'>Serviços</span>
                </h2>
                <p className='text-white/60 mt-4 md:text-lg max-w-xl mx-auto'>
                    Dois caminhos para seu site com tudo o que você precisa para começar. Hospedagem configurada, estrutura otimizada para SEO e 30 dias de suporte para garantir sua tranquilidade.
                </p>
            </FadeIn>

            {/* Cards */}
            <FadeInStagger
                stagger={0.15}
                className='
                    flex flex-col gap-6 w-[85vw]
                    lg:flex-row lg:items-start lg:w-auto lg:gap-6
                '
            >
                {plans.map(plan => (
                    <FadeInItem key={plan.name}>
                        <div className={`
                            relative flex flex-col
                            rounded-3xl p-6 md:p-8
                            w-full lg:w-md
                            transition-all duration-300
                            ${plan.featured
                                ? 'bg-blue-light2/6 border border-blue-light2/50 hover:border-blue-light2/75 hover:shadow-[0_0_20px_rgba(130,24,216,0.18)]'
                                : 'bg-blue-dark/50 border border-blue-light2/20 hover:border-blue-light2/40'
                            }
                        `}>
                            {/* Badge */}
                            {plan.badge && (
                                <span className='absolute -top-3.5 left-1/2 -translate-x-1/2
                                    bg-blue-light2 text-white text-xs font-bold
                                    px-4 py-1 rounded-full whitespace-nowrap
                                    shadow-[0_0_14px_rgba(130,24,216,0.6)]'>
                                    {plan.badge}
                                </span>
                            )}

                            {/* Plan name */}
                            <p className={`font-bold text-left mb-4 ${plan.featured ? 'text-2xl' : 'text-xl'}`}>
                                {plan.name}
                            </p>

                            {/* Price */}
                            <p className='text-white/35 text-xs text-left mb-1'>a partir de</p>
                            <div className='flex items-end gap-3 mb-1 text-left'>
                                <span className={`font-bold leading-none ${plan.featured ? 'text-5xl' : 'text-4xl'}`}>
                                    {plan.price}
                                </span>
                                <div className='flex flex-col pb-1 gap-0.5'>
                                    <span className='text-xs font-bold text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded-full'>
                                        {plan.discount}
                                    </span>
                                    <span className='text-white/35 text-sm line-through'>{plan.oldPrice}</span>
                                </div>
                            </div>
                            <p className='text-white/35 text-xs text-left mb-5'>Prazo estimado: {plan.prazo}</p>

                            {/* Divider */}
                            <hr className='border-blue-light2/15 mb-5'/>

                            {/* Description */}
                            <p className='text-white/60 text-sm text-left leading-relaxed mb-5'>
                                {plan.desc}
                            </p>

                            {/* Features */}
                            <div className='flex flex-col gap-2.5 text-left mb-8 flex-1'>
                                {plan.features.map((f, i) => (
                                    <div key={i} className='flex items-center gap-2.5'>
                                        <Check
                                            size={15}
                                            className={plan.featured ? 'text-blue-light2 shrink-0' : 'text-blue-light/70 shrink-0'}
                                        />
                                        <span className='text-sm text-white/80'>{f}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <a
                                href='https://wa.me/5522988114263'
                                target='_blank'
                                rel='noopener noreferrer'
                                className={`
                                    block w-full py-3 rounded-xl font-semibold text-sm text-center
                                    transition-all duration-200
                                    ${plan.featured
                                        ? 'bg-blue-light2 hover:bg-blue-light2/80'
                                        : 'border border-blue-light2/35 text-white/75 hover:bg-blue-light2/10 hover:border-blue-light2/60'
                                    }
                                `}
                            >
                                Solicitar Orçamento
                            </a>
                        </div>
                    </FadeInItem>
                ))}
            </FadeInStagger>

            {/* Footer note */}
            <FadeIn delay={0.3} className='w-[85vw] lg:w-auto mt-10'>
                <div className='flex items-center gap-4'>
                    <hr className='flex-1 border-white/10'/>
                    <span className='text-white/30 text-xs'>ou</span>
                    <hr className='flex-1 border-white/10'/>
                </div>
                <a
                    href='https://wa.me/5522988114263'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block text-center text-white/40 text-sm mt-4 hover:text-white/75 transition-colors duration-200'
                >
                    Precisa de algo diferente? <span className='text-blue-light/70 font-semibold'>Orçamento personalizado →</span>
                </a>
            </FadeIn>
        </section>
    )
}
