import { Card, CardContent } from '@/components/ui/card';
import { Search, Layers2, BrainCog } from 'lucide-react';

export function Architecture() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center mb-8">
          <div className="flex flex-row gap-2 px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium">
            <Search className='h-5 w-4' />
            Knowledge Database
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Understanding <span className="text-[#2D7DD2]">the Architecture</span>
        </h2>

        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Let's Go Beyond the layers of Voyager to understand how it enables the ability to explore knowledge.
        </p>

        {/* Agents Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20">
          <div className="flex flex-col sm:flex-row gap-6 mb-8 md:mb-0 w-full md:w-auto">
            <Card className="bg-white shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-56">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Comparison Agent</h3>
                  <MirroredBlobPlusIcon size={118} color="#2D7DD2" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-56">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Horizon Agent</h3>
                  <MirroredBlobPlusIcon size={118} color="#40B4C7" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-56">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Analysis Agent</h3>
                  <MirroredBlobPlusIcon size={118} color="#2174B9" />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-gray-600 w-full md:w-80 mx-auto md:mx-0 text-center md:text-justify">
            Meet your digital compliance guardians. These intelligent agents don't just read regulations–they breathe them. Transforming complex rules into actionable insights, they're the vigilant sentinels protecting your financial institution's integrity.
          </div>
        </div>


        {/* Domain Core Section */}
        <div className="flex lg:flex-row flex-col lg:gap-20 gap-10 items-center mb-16 text-justify">
          <div className="shadow-lg bg-[#2D7DD2] p-12 rounded-2xl lg:w-6/12 w-11/12 text-center m-auto">
            <div className="text-white text-2xl font-bold mb-4 text-center">Domain Core</div>
            <div className="w-32 h-32 text-white m-auto text-center">
              <Layers2 className='h-24 w-24' />
            </div>
          </div>
          <div>
            <p className="text-gray-600">
              Our Domain-Focused database is an infinite library of wisdom. No matter what type of financial institution, the knowledge has already been curated and primed to support depth and accuracy far beyond any generic AI!
            </p>
          </div>
        </div>

        {/* Knowledge Core Section */}
        <div className="flex lg:flex-row-reverse flex-col gap-20 lg:pl-48 items-center text-justify m-auto">
          <div className="shadow-lg bg-[#75AA00] p-12 rounded-2xl order-1 md:order-2 w-10/12 m-auto text-center">  
            <div className="text-white text-2xl font-bold mb-4 text-center m-auto">Knowledge Core</div>
            <div className="w-32 h-32 text-white m-auto">
              <BrainCog className='h-24 w-24' />
            </div>
          </div>
          <div className="order-2 md:order-1">
            <p className="text-gray-600">
              We've created a secure vault where your existing documents are AI-empowered, compliant, and intelligent, allowing them to work smarter, not harder. We offer many options, from on-premises to cloud, ensuring your FI's core knowledge remains under your control.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export function MirroredBlobPlusIcon({ size = 24, color = "#2174B9", className = "" }) {
  return (
    <span>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ transform: "scaleX(-1)" }}  // This flips the icon horizontally
      >
        {/* Main blob shape */}
        <path
          d="M32 12C36.5 12 39.5 16 39.5 20C39.5 24 42 26.5 46 26.5C50 26.5 54 29.5 54 34C54 38.5 50 41.5 46 41.5C42 41.5 39.5 44 39.5 48C39.5 52 36.5 56 32 56C27.5 56 24.5 52 24.5 48C24.5 44 22 41.5 18 41.5C14 41.5 10 38.5 10 34C10 29.5 14 26.5 18 26.5C22 26.5 24.5 24 24.5 20C24.5 16 27.5 12 32 12Z"
          fill={color}
        />
        {/* Small circle in top right (will appear on left after mirroring) */}
        <svg
          width={size / 6}
          height={size / 6}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Main blob shape */}
          <path
            d="M32 12C36.5 12 39.5 16 39.5 20C39.5 24 42 26.5 46 26.5C50 26.5 54 29.5 54 34C54 38.5 50 41.5 46 41.5C42 41.5 39.5 44 39.5 48C39.5 52 36.5 56 32 56C27.5 56 24.5 52 24.5 48C24.5 44 22 41.5 18 41.5C14 41.5 10 38.5 10 34C10 29.5 14 26.5 18 26.5C22 26.5 24.5 24 24.5 20C24.5 16 27.5 12 32 12Z"
            fill={color}
          />
        </svg>
      </svg>
    </span>
  );
}

import { BookOpen } from "lucide-react";

const IconExample = () => {
  return (
    <div className="bg-blue-600 flex items-center justify-center h-40 w-40 rounded">
      <BookOpen className="text-white" size={80} />
    </div>
  );
};

export default IconExample;