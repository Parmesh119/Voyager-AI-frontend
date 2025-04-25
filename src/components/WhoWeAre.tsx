import React from 'react';

export function WhoWeAre() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <div className="w-full md:w-1/2">
            <div className="inline-block mb-4 px-3 py-1 bg-[#ECFFD9] text-[#75AA00] rounded-full text-sm font-medium">
              Pioneers
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Who we <span className="text-[#2D7DD2]">Are</span>
            </h2>

            <div className="space-y-6">
              <p className="text-gray-600">
                We are a group of pioneers, born in the mobile banking age.
              </p>
              
              <p className="text-gray-600">
                We went on to build digital banking and develop multiple successful AI programs for major firms.
              </p>
              
              <p className="text-gray-600">
                We are here because we have a vision to tackle the toughest unaddressed problems.
              </p>
              
              <p className="text-gray-600">
                We understand financial institutions' challenges with new technology and know how to navigate those challenges to achieve results without getting lost on the journey.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden h-[400px]">
              <img 
                src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg"
                alt="People looking at night sky" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}