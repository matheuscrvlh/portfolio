import secundaria from '../assets/images/secundaria.png'

export default function AboutDev() {
    return (
        <section 
            id='aboutdev'
            className='flex flex-col relative items-center bg-black h-full text-white pt-15 pb-15'
        >
            <div className='w-[50vw] mr-[30%] text-center'>
                <h2 className='text-5xl font-bold mt-10'>
                    <span className='text-blue-light'>
                        Sobre
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
                        Mim
                    </span>
                </h2>
                <div className='flex text-left relative justify-between mb-16 mt-12'>
                    <div className='flex flex-col w-full gap-8 text-lg text-white/80'>
                        <p>
                            Sou desenvolvedor web focado na criação de aplicações modernas, rápidas e bem estruturadas, com o objetivo de transformar ideias em soluções digitais reais.
                            Ao longo dos meus estudos e projetos práticos, venho construindo uma base sólida no desenvolvimento full stack, entendendo tanto a parte visual quanto a lógica
                            por trás das aplicações, sempre buscando unir design, performance e funcionalidade em cada projeto.
                        </p>
                        <p>
                            Trabalho com tecnologias modernas como React, Next.js e TypeScript no frontend, além de Node.js no backend. Na construção das interfaces, utilizo HTML, CSS
                            e TailwindCSS para desenvolver layouts responsivos, organizados e com foco na experiência do usuário. Também possuo experiência com integração de APIs REST,
                            manipulação de dados com PostgreSQL e aplicação de boas práticas utilizando JavaScript moderno. No fluxo de desenvolvimento, utilizo Git e GitHub para versionamento
                            e organização dos projetos, além de ferramentas como Figma e Photoshop para criação e adaptação de interfaces.
                        </p>
                        <p>
                            Acredito que um bom projeto vai além de apenas funcionar, ele precisa ser rápido, intuitivo e eficiente. Por isso, priorizo código limpo, organização e escalabilidade,
                            pensando não só na entrega, mas também na evolução futura da aplicação. Meu objetivo é desenvolver soluções digitais que realmente façam diferença, oferecendo
                            uma experiência consistente e de qualidade para o usuário.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <img 
                    src={secundaria} 
                    alt="Imagem Desenvolvedor" 
                    className='absolute top-0 right-0 h-full'
                />
            </div>
        </section>
    )
}