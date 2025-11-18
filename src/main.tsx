import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SobreMi from './sobreMi.tsx'
import ScrollToTop from './scrollTop.tsx' // <-- importa el componente
import PoliticaPrivacidad from './politicaPrivacidad.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sobremi" element={<SobreMi />} />
        <Route path='/politica-privacidad' element={<PoliticaPrivacidad/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
