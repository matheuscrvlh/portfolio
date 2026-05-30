export default function SkillCard({img, alt, desc}) {
    return (
        <div className='
            flex flex-col items-center text-center
            bg-blue-base/60 border border-blue-light2/20
            rounded-xl px-2 py-4
            min-w-28
            hover:-translate-y-1.5
            hover:border-blue-light2/50
            hover:shadow-[0_0_20px_rgba(130,24,216,0.2)]
            cursor-default transition-all duration-300
            md:px-5 md:py-5
        '>
            <img
                src={img}
                alt={alt}
                className='w-10 pb-2 md:w-20 md:p-3'
            />
            <p className='text-white/75 text-sm md:text-base'>{desc}</p>
        </div>
    )
}
