import Navbar from "../components/Navbar"
import Main from "../sections/Main"
import About from "../sections/About"
import Skills from "../sections/Skills"
import Projects from "../sections/Projects"
import Services from "../sections/Services"
import AboutDev from "../sections/AboutDev"

export default function Home() {
    return (
        <main className='h-full'>
            <Navbar />
            <Main />
            <About />
            <Services />
            <AboutDev />
            <Skills />
            <Projects />
        </main>
    )
}