import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Katalog from './pages/Katalog.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import CaraPesan from './pages/CaraPesan.jsx'
import Kontak from './pages/Kontak.jsx'
import Loker from './pages/Loker.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="katalog" element={<Katalog />} />
          <Route path="produk/:id" element={<ProductDetail />} />
          <Route path="cara-pesan" element={<CaraPesan />} />
          <Route path="kontak" element={<Kontak />} />
          <Route path="loker" element={<Loker />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
