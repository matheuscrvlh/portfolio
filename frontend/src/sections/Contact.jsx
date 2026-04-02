// ICONS
import instagram from "../assets/icons/instagram colorido.png"
import whatsapp from "../assets/icons/whatsapp colorido.png"
import telefone from "../assets/icons/telefone.png"

export default function Contact() {
    return (
        <section 
            id="contact"
            className='
                flex flex-col h-full items-center bg-linear-to-b from-blue-base to-blue-dark text-white pt-15 pb-25
            '
        >
            <h2 className='text-3xl font-bold w-[85vw] text-center md:w-auto md:text-5xl'>
                <span className='text-blue-light'>
                    Vamos transformar sua 
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
                    presença digital?
                </span>
            </h2>
            <div className='flex-col justify-items-center mb-12 mt-5 w-[85vw] text-center md:w-auto'>
                <h3 className='text-md font-normal text-white/80 md:text-xl'>Entre em contato e descubra como criar experiências eficientes,</h3>
                <h3 className='text-md font-normal text-white/80 md:text-xl'>modernas e voltadas para resultados reais.</h3>
            </div>
            <div className='flex gap-5 mt-6 w-[85vw] md:w-auto md:mt-20 md:gap-10'>
                <a href="https://wa.me/5522988114263" target="_blank">
                <div 
                    className='flex gap-4 px-6 py-5 bg-blue-light2/50 items-center text-md font-bold rounded-2xl cursor-pointer text-white/95 
                    hover:-translate-y-1 hover:bg-blue-light2/30 transition
                '>
                    <img src={whatsapp} alt="Whatsapp" className='w-5 h-5 md:w-10 md:h-10'/>
                    <p>Whatsapp</p>
                </div>
                </a>
                <a href="https://www.instagram.com/mthcode/" target="_blank">
                <div className='
                    flex gap-4 px-6 py-5 bg-blue-base items-center text-md font-bold rounded-2xl cursor-pointer text-white/80
                    hover:-translate-y-1 hover:bg-blue-light2/30 transition
                '>
                    <img src={instagram} alt="Instagram" className='w-5 h-5 md:w-10 md:h-10'/>
                    <p>Instagram</p>
                </div>
                </a>
            </div>
            <div 
                className='flex gap-4 px-6 py-5 bg-blue-dark border border-blue-light2/30 items-center rounded-2xl text-white/80 mt-10'
            >
                <img src={telefone} alt="Telefone" className='w-5 h-5 md:w-10 md:h-10'/>
                <p>+55 (22) 98811-4263</p>
            </div>
        </section>
    )
}