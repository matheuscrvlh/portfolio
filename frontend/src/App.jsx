// DEPENDENCES
import { BrowserRoutes, Routes, Route } from 'react-router-dom'

// PAGES
import Home from './pages/Home'

function App() {
  return (
    <BrowserRoutes>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRoutes>
  )
}

export default App
