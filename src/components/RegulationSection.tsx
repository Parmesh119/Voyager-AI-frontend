import { useEffect, useState } from 'react';

export function RegulationSection() {
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    // Check if window is desktop size on initial load
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint in Tailwind
    };
    
    // Run on mount
    checkScreenSize();
    
    // Add resize listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-[#007ABA] text-white">
      <div className="container mx-auto max-w-6xl">
        <span className="font-bold">
          <h2 className="text-3xl md:text-4xl text-center mb-12 font-[Arial_Rounded_MT_Bold]">
            Regulation: A Top Priority for Financial Institutions
          </h2>
        </span>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">CSBS Survey Reveals Growing Focus</h3>
            <p className="text-white/90 font-[Arial]">
              Recent <u>Community State Banking Survey (CSBS)</u> data reveals
              {isDesktop && <br />} that regulatory compliance has become the top concern for
              {isDesktop && <br />} financial institutions. The importance of this issue continues to
              {isDesktop && <br />} grow, with concern levels rising from 77% in 2022 to 81% in 2023
              {isDesktop && <br />} in the CSBS Annual Survey.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Time for a New Approach</h3>
            <p className="text-white/90 font-[Arial]">
              As regulations become increasingly complex and scrutiny
              {isDesktop && <br />} intensifies, traditional compliance approaches are no longer
              {isDesktop && <br />} sustainable.
            </p>
            <p className="text-white/90 mt-4 font-[Arial]">
              Financial institutions now require innovative solutions that can both
              {isDesktop && <br />} scale with expanding regulatory demands and maintain consistent
              {isDesktop && <br />} accuracy and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}