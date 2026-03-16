export default function SkillCard({img, alt, desc}) {
    return (
        <div className='bg-(--color-blue-base) rounded-xl p-5 hover:-translate-y-1 cursor-pointer transition justify-items-center text-center hover:shadow-lg'>
            <img src={img} alt={alt} className='w-20 pb-3'/>
            <p className='text-white/75'>{desc}</p>
        </div>
    )
}