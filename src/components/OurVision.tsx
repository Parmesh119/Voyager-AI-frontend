import OurVisionImage from "@/assets/OurVision/OurVisionImage.jpg"
export function OurVision() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row lg:gap-48 gap-10">
          <div className="w-full md:w-1/3">
            <div className="inline-block mb-4 px-14 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium">
              A True Partner
            </div>

            <h2 className="text-3xl md:text-4xl mb-6 font-[Arial_Rounded_MT_Bold]">
              <span className="font-bold">Our <span className="text-[#2D7DD2]">Vision</span></span>
            </h2>

            <div className="space-y-6 text-sm font-[Arial]">
              <p className="text-gray-600">
                We are not developing an AI product that simply<br/> accelerates specific tasks or processes.
              </p>
              
              <p className="text-gray-600">
                We are creating a true interactive partner that can<br/> streamline repetitive aspects, help you achieve results<br/> more quickly, and learn alongside your institution.
              </p>
              
              <p className="text-gray-600">
                It is designed to meet the most demanding requirements.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden h-[400px]">
              <img 
                src={OurVisionImage}
                alt="Night sky over road" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}