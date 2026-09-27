import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import AppointmentPage from './pages/AppointmentPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nos-soins" element={<ServicesPage />} />
          <Route path="/rendez-vous" element={<AppointmentPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
