import Navbar from "../components/Navbar"
import Main from "../sections/Main"
import About from "../sections/About"
import Skills from "../sections/Skills"
import Projects from "../sections/Projects"

export default function Home() {
    return (
        <main className='h-full'>
            <Navbar />
            <Main />
            <About />
            <Skills />
            <Projects />
        </main>
    )
}