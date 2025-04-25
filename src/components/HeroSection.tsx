import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-[#f7f9fb]">
      <div className="container mx-auto max-w-5xl text-center">
        <div className="inline-block mb-4 px-3 py-1 bg-[#ECFFD9] text-[#75AA00] rounded-full text-sm font-medium">
          <span className="flex items-center">
            <DocumentIcon className="mr-1 h-4 w-4" />
            Reinventing Financial Compliance
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-[#2D7DD2]">Compliance-Powered AI</span>
          <br />
          <span className="text-black">for Financial Institutions.</span>
        </h1>
        
        <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-base md:text-lg">
          An advanced, secure AI that enhances your FI's financial knowledge while ensuring
          compliance with all regulatory requirements through streamlined, automated
          workflows—cutting compliance costs by up to 90% and minimizing human error.
        </p>
        
        <div className="flex flex-col md:flex-row gap-3 justify-center max-w-md mx-auto mb-8">
          <Input 
            type="email" 
            placeholder="Enter your work email" 
            className="h-12 border-gray-300"
          />
          <Button className="h-12 bg-[#2D7DD2] hover:bg-[#1d6abf] pl-6 pr-4">
            Get Started
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <Benefit icon={<CheckCircle className="h-5 w-5 text-[#75AA00]" />} text="Free 14 Day Trial" />
          <Benefit icon={<CheckCircle className="h-5 w-5 text-[#75AA00]" />} text="No Credit Card Required" />
          <Benefit icon={<CheckCircle className="h-5 w-5 text-[#75AA00]" />} text="Cancel Anytime" />
        </div>
      </div>
    </section>
  );
}

interface BenefitProps {
  icon: React.ReactNode;
  text: string;
}

function Benefit({ icon, text }: BenefitProps) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-gray-600">{text}</span>
    </div>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14"/>
      <path d="m12 5 7 7-7 7"/>
    </svg>
  );
}

function DocumentIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
    </svg>
  );
}