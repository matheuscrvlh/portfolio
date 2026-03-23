// COMPONENTS
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// SECTIONS
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
            <Navbar className='bg-linear-to-l from-(--color-blue-base) to-(--color-blue-dark)' />
            <Main />
            <AboutServices />
            <Services />
            <AboutDev />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </main>
    )
}