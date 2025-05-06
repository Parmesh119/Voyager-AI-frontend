import { BrowserRouter as Router } from "react-router-dom"
import App from './App'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import AnimatedSection from './AnimatedSection';
import Leadership from './components/Leadership'
import { Routes, Route } from 'react-router-dom'

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/leadership" element={<Leadership />} />
      </Routes>
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </Router>
  )
}