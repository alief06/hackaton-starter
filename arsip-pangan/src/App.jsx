import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Beranda from './pages/Beranda'
import DetailMakanan from './pages/DetailMakanan'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/makanan/:id" element={<DetailMakanan />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
