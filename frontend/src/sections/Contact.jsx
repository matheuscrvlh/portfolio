import { ArrowRight } from 'lucide-react'

import instagram from "../assets/icons/instagram colorido.png"
import whatsapp from "../assets/icons/whatsapp colorido.png"
import telefone from "../assets/icons/telefone.png"

import FadeIn, { FadeInStagger, FadeInItem } from '../components/FadeIn'

export default function Contact() {
    return (
        <section
            id="contact"
            className='
                flex flex-col items-center
                bg-linear-to-b from-blue-base to-blue-dark
                text-white pt-20 pb-28
            '
        >
            {/* Header */}
            <FadeIn className='text-center w-[85vw] md:w-auto mb-16 md:mb-20'>
                <p className='text-sm font-bold text-gradient tracking-widest mb-3'>CONTATO</p>
                <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl'>
                    <span className='text-blue-light'>Vamos transformar sua </span>
                    <span className='text-gradient'>presença digital?</span>
                </h2>
                <p className='text-white/60 mt-4 md:text-lg max-w-lg mx-auto'>
                    Em até 24 horas você recebe uma proposta feita sob medida para as necessidades do seu negócio.
                </p>
            </FadeIn>

            <div className='flex flex-col gap-4 w-[85vw] md:w-120'>

                {/* WhatsApp — CTA principal */}
                <FadeIn delay={0.1}>
                    <a
                        href='https://wa.me/5522988114263'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='
                            flex items-center gap-5 w-full
                            px-6 py-5 rounded-2xl
                            bg-blue-light2/15 border border-blue-light2/35
                            hover:bg-blue-light2/25 hover:border-blue-light2/60
                            hover:-translate-y-0.5
                            hover:shadow-[0_0_24px_rgba(130,24,216,0.25)]
                            transition-all duration-300
                            group
                        '
                    >
                        <img src={whatsapp} alt='WhatsApp' className='w-10 h-10 shrink-0'/>
                        <div className='flex-1 text-left'>
                            <p className='font-bold text-lg'>Chamar no WhatsApp</p>
                            <p className='text-white/45 text-sm'>Respondo em minutos</p>
                        </div>
                        <ArrowRight
                            size={18}
                            className='text-white/30 group-hover:text-blue-light group-hover:translate-x-1 transition-all duration-300 shrink-0'
                        />
                    </a>
                </FadeIn>

                {/* Secundários — Instagram + Telefone */}
                <FadeInStagger stagger={0.1} className='grid grid-cols-2 gap-4'>
                    <FadeInItem>
                        <a
                            href='https://www.instagram.com/mthcode/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='
                                flex items-center justify-center gap-3
                                px-5 py-4 rounded-2xl
                                bg-blue-base border border-blue-light2/15
                                text-white/70 font-semibold text-sm
                                hover:border-blue-light2/40 hover:text-white/90 hover:bg-blue-light2/8
                                hover:-translate-y-0.5
                                transition-all duration-250
                            '
                        >
                            <img src={instagram} alt='Instagram' className='w-5 h-5 shrink-0'/>
                            Instagram
                        </a>
                    </FadeInItem>
                    <FadeInItem>
                        <div className='
                            flex items-center justify-center gap-3
                            px-5 py-4 rounded-2xl
                            bg-blue-base border border-blue-light2/15
                            text-white/45 text-sm
                        '>
                            <img src={telefone} alt='Telefone' className='w-4 h-4 opacity-50 shrink-0'/>
                            (22) 98811-4263
                        </div>
                    </FadeInItem>
                </FadeInStagger>

            </div>
        </section>
    )
}
