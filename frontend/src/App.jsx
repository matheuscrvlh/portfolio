// DEPENDENCES
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import Home from './pages/Home.jsx'
import AllProjects from './pages/AllProjects.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projetos' element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  )
}

