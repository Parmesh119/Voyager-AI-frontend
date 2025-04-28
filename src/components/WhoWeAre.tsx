import WhoWeAreImage from "@/assets/WhoWeAre/WhoWeAreImage.jpg";
export function WhoWeAre() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row-reverse gap-20">
          <div className="w-full md:w-1/2">
            <div className="inline-block mb-4 px-14 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium">
              Pioneers
            </div>

            <h2 className="text-3xl md:text-4xl mb-6 font-[Arial_Rounded_MT_Bold]">
              <span className="font-bold">Who we <span className="text-[#2D7DD2]">Are</span></span>
            </h2>

            <div className="space-y-6 text-sm flex flex-wrap font-[Arial]">
              <p className="text-gray-600">
                We are a group of pioneers, born in the mobile banking age.
              </p>
              
              <p className="text-gray-600">
                We went on to build digital banking and develop multiple<br/> successful AI programs for major firms.
              </p>
              
              <p className="text-gray-600">
                We are here because we have a vision to tackle the toughest<br/> unaddressed problems.
              </p>
              
              <p className="text-gray-600">
                We understand financial institutions' challenges with new<br/> technology and know how to navigate those challenges to<br/> achieve results without getting lost on the journey.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden h-[400px]">
              <img 
                src={WhoWeAreImage}
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