import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import DaftarCerita from './pages/DaftarCerita'
import BacaCerita from './pages/BacaCerita'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<DaftarCerita />} />
          <Route path="/cerita/:id" element={<BacaCerita />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
