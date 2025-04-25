import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* About Voyager AI Section */}
        <div className="mb-20">
          <div className="flex justify-center mb-8">
            <div className="inline-block px-3 py-1 bg-[#ECFFD9] text-[#75AA00] rounded-full text-sm font-medium">
              The Company
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About <span className="text-[#2D7DD2]">Voyager AI</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-md hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Mission</h3>
                <p className="text-gray-600">
                  At Voyager AI, We are driven to empower financial institutions with the tools they need to navigate the ever-evolving regulatory landscape. Our mission is to be the trust partner in transforming compliance through innovative AI-Powered solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Expertise</h3>
                <p className="text-gray-600">
                  Our Team comprises of seasoned financial experts, data scientists, and regulatory specialists who bring a wealth of industry knowledge and technical expertise to your doorstep. Together, We are redefining the future of compliance, risk management, and innovate AI.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-20">
          <div className="flex justify-center mb-8">
            <div className="inline-block px-3 py-1 bg-[#ECFFD9] text-[#75AA00] rounded-full text-sm font-medium">
              The Company
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About Us: <span className="text-[#2D7DD2]">Leadership</span>
          </h2>

          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Meet our experienced leadership team driving innovation in financial compliance
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              'Aaron Colcord',
              'Joel Flores',
              'Palash Kapoor',
              'Jeff Hunter',
              'JD Gimzek'
            ].map((name) => (
              <Card key={name} className="bg-white shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-gray-200 w-full aspect-square rounded-lg mb-4"></div>
                  <h3 className="font-semibold mb-2">{name}</h3>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}