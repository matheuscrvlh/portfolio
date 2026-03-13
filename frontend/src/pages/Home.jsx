import Navbar from "../components/Navbar"
import Main from "../sections/Main"
import Quality from "../sections/Quality"

export default function Home() {
    return (
        <main className='bg-linear-to-l from-(--color-blue-base) to-(--color-blue-dark) min-h-screen'>
            <Navbar />
            <Main />
            <Quality />
        </main>
    )
}