import { FadeInStagger, FadeInItem } from '../components/FadeIn'

const stats = [
    { value: '10+', label: 'Sites entregues' },
    { value: '7',   label: 'Dias prazo médio' },
    { value: '2+',  label: 'Anos de experiência' },
]

export default function Stats() {
    return (
        <section className='bg-blue-dark border-y border-blue-light2/10'>
            <FadeInStagger
                stagger={0.12}
                className='grid grid-cols-3 max-w-2xl mx-auto px-6'
            >
                {stats.map(({ value, label }, i) => (
                    <FadeInItem key={i}>
                        <div className={`
                            flex flex-col items-center text-center px-3 py-6 md:px-8 md:py-10
                            border-blue-light2/10
                            ${i < stats.length - 1 ? 'border-r' : ''}
                        `}>
                            <span className='text-3xl font-bold text-gradient md:text-5xl'>{value}</span>
                            <span className='text-white/50 text-xs mt-1 md:text-sm md:mt-2'>{label}</span>
                        </div>
                    </FadeInItem>
                ))}
            </FadeInStagger>
        </section>
    )
}
