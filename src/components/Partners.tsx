import { Button } from '@/components/ui/button';
import { UserRound } from 'lucide-react';
import AWS from '@/assets/Partners/AWS.png';
import GoogleCloud from '@/assets/Partners/GoogleCloud.png';
import August_Brown from "@/assets/Partners/August_Brown.png";
import MS_AZ from "@/assets/Partners/MS_AZ.png";
import FOR_M from "@/assets/Friends/FOR_M.png";
import Gener8tor from "@/assets/Friends/Generator.png";
import WISC from "@/assets/Friends/WISC.png";
export function Partners() {
  return (
    <section id="partnerships" className="w-full py-20 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium">
            <span className='flex flex-row gap-2'><UserRound className='h-5 w-4 border-dark' /> Partners</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-6 font-[Arial_Rounded_MT_Bold]">
            <span className='font-bold'>Who we're <span className="text-[#2D7DD2]">partnered with</span></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-[Arial]">
            Lorem ipsum Lorem ipsum Lorem ipsum
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center mt-12 opacity-60">
            <img src={AWS} alt="AWS" className="h-36 w-auto mx-auto" />
            <img src={GoogleCloud} alt="Google Cloud" className="h-32 mx-auto w-full" />
            <img src={August_Brown} alt="August Brown" className="h-full w-full mx-auto" />
            <img src={MS_AZ} alt="Microsoft Azure" className="h-full w-full mx-auto" />
          </div>
        </div>
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium">
            <span className='flex flex-row gap-2'><UserRound className='h-5 w-4 border-bold' />Friends</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-12 font-[Arial_Rounded_MT_Bold]">
            <span className='font-bold'>We've got <span className="text-[#2D7DD2]">acolades from</span></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center opacity-60">
            <img src={FOR_M} alt="FOR-M by mke tech" className="h-28 w-64 mx-auto" />
            <img src={Gener8tor} alt="gener8tor" className="h-28 w-64 mx-auto" />
            <img src={WISC} alt="WISCONSIN ECONOMIC DEVELOPMENT" className="h-28 w-64 mx-auto" />
          </div>
        </div>
      </div>

      {/* Full width blue section - moved outside the container */}
      <div className="w-full">
        <div className="bg-[#007ABA] text-white w-full py-28 px-0 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 font-[Arial_Rounded_MT_Bold]"><span className='font-bold'>Partner With Voyager AI</span></h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 lg:p-0 p-4 font-[Arial]">
            Built for the Financial Industry, Voyager AI addresses a wide range of compliance challenges, including AML/KYC, sanctions screening, data privacy, and more...
          </p>
          <Button variant="secondary" size="lg" className="bg-white font-[Arial] text-[#2D7DD2] hover:bg-gray-100 font-bold text-base">
            Become a Partner
          </Button>
        </div>
      </div>
    </section>
  );
}