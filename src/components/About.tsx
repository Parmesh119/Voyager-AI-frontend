import {  CardContent } from '@/components/ui/card';
import { BriefcaseBusiness } from 'lucide-react';


export function About() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0]">
      <div className="container mx-auto max-w-6xl">
        {/* About Voyager AI Section */}
        <div className="mb-20">
          <div className="flex justify-center mb-8">
            <div className="flex flex-row gap-2 px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium">
              <BriefcaseBusiness className='w-4 h-5' />The Company
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl text-center mb-12 font-[Arial_Rounded_MT_Bold]">
            <span className='font-bold'>About <span className="text-[#2D7DD2]">Voyager AI</span></span>
          </h2>

          <div className="gap-8">
            <div className="bg-white overflow-hidden transition-all duration-300"
              style={{
                boxShadow: "12px 0px 20px -10px rgba(0, 0, 0, 0.15)",
                borderRadius: "16px"
              }}>
              <CardContent className="p-8 flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4">Mission</h3>
                  <p className="text-gray-600 font-[Arial] leading-relaxed">
                    At Voyager AI, We are driven to empower financial institutions with the tools they need to navigate the ever-evolving regulatory landscape. Our mission is to be the trust partner in transforming compliance through innovative AI-Powered solutions.
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4">Expertise</h3>
                  <p className="text-gray-600 font-[Arial] leading-relaxed">
                    Our Team comprises of seasoned financial experts, data scientists, and regulatory specialists who bring a wealth of industry knowledge and technical expertise to your doorstep. Together, We are redefining the future of compliance, risk management, and innovate AI.
                  </p>
                </div>
              </CardContent>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-20">
          <div className="flex justify-center mb-8">
            <div className="flex flex-row gap-2 px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium">
              <BriefcaseBusiness className='h-5 w-4' /> The Company
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
              <span key={name} className="bg-white shadow-md hover:shadow-xl transition-all duration-300 p-4">
                <span className="p-6">
                  <div className="bg-gray-200 w-full aspect-square rounded-lg mb-4 text-2xl font-bold text-center">Person</div>
                  <h3 className="font-semibold mb-2">{name}</h3>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}