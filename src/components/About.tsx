import {  CardContent } from '@/components/ui/card';
import { BriefcaseBusiness } from 'lucide-react';


export function About() {
  return (
    <section id="about" className="w-full py-20 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0]">
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
                borderRadius: "16px"
              }}>
              <CardContent className="p-8 flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4">Mission</h3>
                  <p className="text-gray-600 font-[Arial] leading-relaxed">
                    At Voyager AI, We are driven to empower financial institutions<br/> with the tools they need to navigate the ever-evolving<br/> regulatory landscape. Our mission is to be the trust partner in<br/> transforming compliance through innovative AI-Powered<br/> solutions.
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4">Expertise</h3>
                  <p className="text-gray-600 font-[Arial] leading-relaxed">
                    Our Team comprises of seasoned financial experts, data<br/> scientists, and regulatory specialists who bring a wealth of<br /> industry knowledge and technical expertise to your doorstep.<br/> Together, We are redefining the future of compliance, risk<br/> management, and innovate AI.
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

          <h2 className="text-3xl md:text-4xl font-[Arial_Rounded_MT_Bold] text-center mb-4">
            <span className='font-bold'>About Us: <span className="text-[#2D7DD2]">Leadership</span></span>
          </h2>

          <p className="text-gray-600 text-center mb-12 font-[Arial] max-w-2xl mx-auto">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              'Aaron Colcord',
              'Joel Flores',
              'Palash Kapoor',
              'Jeff Hunter',
              'JD Gimzek'
            ].map((name) => (
              <div className='flex flex-col gap-4 font-[Arial]' key={name}>
                <span className='bg-gray-300 font-bold text-2xl py-28 text-center rounded-xl'>
                  Person
                </span>
                <div className='flex flex-col gap-2'>
                  <span className='font-bold text-black font-[Arial]'>
                    {name}
                  </span>
                  <span>
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}