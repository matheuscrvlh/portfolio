import Navbar from "../components/Navbar"
import Main from "../sections/Main"
import AboutServices from "../sections/AboutServices"
import Skills from "../sections/Skills"
import Projects from "../sections/Projects"
import Services from "../sections/Services"
import AboutDev from "../sections/AboutDev"
import Contact from "../sections/Contact"

export default function Home() {
    return (
        <main className='h-full'>
            <Navbar />
            <Main />
            <AboutServices />
            <Services />
            <AboutDev />
            <Skills />
            <Projects />
            <Contact />
        </main>
    )
}