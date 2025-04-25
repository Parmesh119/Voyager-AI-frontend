import React from 'react';

export function RegulationSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-[#2D7DD2] text-white mt-20">
      <div className="container mx-auto max-w-6xl ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Regulation: A Top Priority for Financial Institutions
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">CSBS Survey Reveals Growing Focus</h3>
            <p className="text-white/90">
              Recent Community State Banking Survey (CSBS) data reveals that regulatory compliance has become the top concern for financial institutions. The importance of this issue continues to grow, with concern levels rising from 77% in 2022 to 81% in 2023 in the CSBS Annual Survey.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Time for a New Approach</h3>
            <p className="text-white/90">
              As regulations become increasingly complex and scrutiny intensifies, traditional compliance approaches are no longer sustainable.
            </p>
            <p className="text-white/90 mt-4">
              Financial institutions now require innovative solutions that can both scale with expanding regulatory demands and maintain consistent accuracy and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}