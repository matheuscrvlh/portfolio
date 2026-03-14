// ICONS
import typescript from '../assets/icons/typescript.png'
import react from '../assets/icons/react.png'

export default function Skills() {
    return (
        <section className='flex flex-col items-center bg-linear-to-l from-(--color-blue-base) to-(--color-blue-dark) h-dvh text-white'>
            <h2 className='text-(--color-blue-light) text-5xl font-bold mt-10'>Minhas Habilidades</h2>
            <div className='flex-col justify-items-center mb-16 mt-6'>
                <h3 className='text-xl font-normal '>Desenvolvimento com foco em performance, experiência do usuário e código escalável.</h3>
                <h3 className='text-xl font-normal '>Cada projeto é pensado para transformar ideias em produtos digitais eficientes.</h3>
            </div>
            <div className='grid grid-cols-5 gap-10'>
                <div className='bg-(--color-blue-base) rounded-xl p-5'>
                    <img src={typescript} alt="TypeScript" className='w-40 cursor-pointer'/>
                    <p>TypeScript</p>
                </div>
                <div className='bg-(--color-blue-base) rounded-xl p-5'>
                    <img src={react} alt="React" className='w-40 cursor-pointer'/>
                    <p>React</p>
                </div>
            </div>
        </section>
    )
}