export default function SkillCard({img, alt, desc}) {
    return (
        <div className='
            flex flex-col items-center bg-blue-base rounded-xl px-2 py-4 hover:-translate-y-1 cursor-pointer transition justify-items-center text-center
            min-w-30 
            md:px-5 md:py-5
            hover:shadow-lg
        '>
            <img 
                src={img} 
                alt={alt} 
                className='
                    w-10 pb-2
                    md:w-20 md:p-3
            '/>
            <p className='text-white/75 text-sm md:text-base'>{desc}</p>
        </div>
    )
}