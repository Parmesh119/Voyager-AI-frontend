import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';
import { NavItem } from './Navbar';
export function Footer() {

  return (
    <footer className="w-full bg-[#0A1628] text-white">
      <div className="w-full py-20 px-4 md:px-8 bg-gradient-to-r from-[#02B6EA] to-[#A4C31A]">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl  mb-4 font-[Arial_Rounded_MT_Bold]">
            <span className='font-bold'>Ready to Transform Your Banking Compliance?</span>
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 font-[Arial]">
            Voyager AI empowers compliance teams with AI-augmented tools<br /> and utilize AI for skill augmentation in a way never before possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" className="font-[Arial] bg-white hover:bg-gray-100 text-blue-700 font-bold text-md">Become a Partner</Button>
            <Button variant="secondary" size="lg" className="font-[Arial] bg-white hover:bg-gray-100 text-blue-700 font-bold text-md">Request a Demo</Button>
            <Button variant="secondary" size="lg" className="font-[Arial] bg-white hover:bg-gray-100 text-blue-700 font-bold text-md">Contact Sales</Button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto py-16 p-4">
        <div className="flex flex-row mb-6 justify-between font-[Arial]">
          <div>
            <h3 className="text-xl font-bold mb-4">Voyager AI</h3>
            <p className="text-white font-[Arial]">
              Transforming complex regulatory<br /> requirements into simplified, automated<br /> workflows—reducing compliance costs by up<br /> to 90% while eliminating human error.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solution Segments</h4>
            <ul className="space-y-2 text-white">
              <li>Regulatory Monitoring</li>
              <li>Risk Assessment</li>
              <li>Audit Documentation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-white">
              <li>Blog</li>
              <li>Case Studies</li>
              <li>Whitepapers</li>
              <li>Documentation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white">
              <li>Leadership</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white pt-8 font-[Arial] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white text-sm font-[Arial]">
            © 2025 Voyager AI. All rights reserved.
          </div>
          <div className="flex gap-6 md:gap-16 lg:gap-28 lg:mr-10 text-sm text-white">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
          <NavItem href="#top" className='text-decoration-none'><button
            className="cursor-pointer"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-8 w-8 bg-gray-500 rounded-full p-1" />
          </button></NavItem>
        </div>
      </div>
    </footer>
  );
}