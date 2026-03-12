import Navbar from "../components/Navbar"
import Main from "../sections/Main"

export default function Home() {
    return (
        <main className='bg-linear-to-l from-(--color-blue-base) to-(--color-blue-dark) min-h-screen'>
            <Navbar />
            <Main />
        </main>
    )
}