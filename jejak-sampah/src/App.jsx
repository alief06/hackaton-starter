import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Beranda from './pages/Beranda'
import CatatSampah from './pages/CatatSampah'
import Tips from './pages/Tips'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/catat" element={<CatatSampah />} />
          <Route path="/tips" element={<Tips />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
