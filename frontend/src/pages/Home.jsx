import Navbar from "../components/Navbar"
import Main from "../sections/Main"
import Quality from "../sections/Quality"
import Skills from "../sections/Skills"

export default function Home() {
    return (
        <main className='h-full'>
            <Navbar />
            <Main />
            <Quality />
            <Skills />
        </main>
    )
}