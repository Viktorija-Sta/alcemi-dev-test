import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage.js'
import MainLayout from './layouts/MainLayout.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
     </BrowserRouter>
  </StrictMode>,
)
