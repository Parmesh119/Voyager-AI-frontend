import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from './App'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import AnimatedSection from '@/AnimatedSection';
import Leadership from '@/components/Leadership'
import RequestDemoForm from "@/components/RequestDemoForm";
import ContactSalesForm from "@/components/ContactSalesForm";
import BecomePartnerForm from "@/components/BecomePartnerForm";
export default function AppRouter() {
  
  return (
    <Router>
      <span id="top">
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/request-demo" element={<RequestDemoForm />} />
          <Route path="/contact-sales" element={<ContactSalesForm />} />
          <Route path="/become-partner" element={<BecomePartnerForm />} />
        </Routes>
        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      </span>
    </Router>
  )
}