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
                className='grid grid-cols-1 md:grid-cols-3 max-w-2xl mx-auto px-6'
            >
                {stats.map(({ value, label }, i) => (
                    <FadeInItem key={i}>
                        <div className={`
                            flex flex-col items-center text-center px-8 py-10
                            border-blue-light2/10
                            ${i < stats.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''}
                        `}>
                            <span className='text-5xl font-bold text-gradient'>{value}</span>
                            <span className='text-white/50 text-sm mt-2'>{label}</span>
                        </div>
                    </FadeInItem>
                ))}
            </FadeInStagger>
        </section>
    )
}
