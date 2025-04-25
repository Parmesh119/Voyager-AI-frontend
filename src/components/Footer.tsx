import React from 'react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="w-full bg-[#0A1628] text-white">
      {/* CTA Section */}
      <div className="w-full py-20 px-4 md:px-8 bg-gradient-to-r from-[#2D7DD2] to-[#75AA00]">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Banking Compliance?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Voyager AI empowers compliance teams with AI-augmented tools and utilize AI for skill augmentation in a way never before possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" className="bg-white hover:bg-gray-100">Become a Partner</Button>
            <Button variant="secondary" size="lg" className="bg-white hover:bg-gray-100">Request a Demo</Button>
            <Button variant="secondary" size="lg" className="bg-white hover:bg-gray-100">Contact Sales</Button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto max-w-6xl py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Voyager AI</h3>
            <p className="text-gray-400">
              Transforming complex regulatory requirements into simplified, automated workflows—reducing compliance costs by up to 90% while eliminating human error.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solution Segments</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Regulatory Monitoring</li>
              <li>Risk Assessment</li>
              <li>Audit Documentation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Blog</li>
              <li>Case Studies</li>
              <li>Whitepapers</li>
              <li>Documentation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Leadership</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            ©2025 Voyager AI. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}