import familyImage from "../assets/BeliefsSection/FamilyImage.jpg";
 
export function BeliefsSection() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-48">
          <div className="w-full md:w-1/3">
            <div className="inline-block mb-4 px-14 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium">
              Community
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What we <span className="text-[#2D7DD2]">Believe</span>
            </h2>

            <div className="space-y-6 text-sm">
              <p className="text-gray-600">
                We believe in the community, the Community Banks, the Credit Unions and the Financial Institutions that touch our lives.
              </p>
              
              <p className="text-gray-600">
                Artificial Intelligence is here, and it can make an impact by improving our work and allowing us to focus on what matters most to us.
              </p>
              
              <p className="text-gray-600">
                Voyager seeks to solve the core problems FIs care about and provide a simple, intuitive, and intelligent platform.
              </p>
              
              <p className="text-gray-600">
                We want to reduce the stress and burden that Financial Institutions encounter.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden h-[400px]">
              <img 
                src={familyImage}
                alt="Happy family enjoying outdoors" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}