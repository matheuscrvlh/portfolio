// DEPENDENCES
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import Home from './pages/Home.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

