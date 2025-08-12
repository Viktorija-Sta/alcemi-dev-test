import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage.js'
import MainLayout from './layouts/MainLayout.js'
import MainAIWindow from './components/AI-assistant/AIWindow/AIWindow.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path='/AI-search' element={<MainAIWindow />} />
        </Route>
      </Routes>
     </BrowserRouter>
  </StrictMode>,
)
