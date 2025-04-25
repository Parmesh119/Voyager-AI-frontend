import { Button } from '@/components/ui/button';
import { UserRound } from 'lucide-react';
export function Partners() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Partners Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-3 py-1 bg-[#ECFFD9] text-[#75AA00] rounded-full text-sm font-medium">
            <span className='flex flex-row gap-2'><UserRound className='h-5 w-4' /> Partners</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Who we're <span className="text-[#2D7DD2]">partnered with</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Working with industry leaders to deliver the best solutions for financial institutions
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mt-12 opacity-60">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="h-12 w-auto mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Cloud_Logo.svg" alt="Google Cloud" className="h-12 w-auto mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="Microsoft Azure" className="h-12 w-auto mx-auto" />
            <div className="text-2xl font-serif text-gray-600">August Brown</div>
          </div>
        </div>

        {/* Accolades Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-3 py-1 bg-[#ECFFD9] text-[#75AA00] rounded-full text-sm font-medium">
            <span className='flex flex-row gap-2'><UserRound className='h-5 w-4' />Friends</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            We've got <span className="text-[#2D7DD2]">accolades from</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center opacity-60">
            <div className="text-2xl font-bold text-gray-600">FOR-M by mke tech</div>
            <div className="text-2xl font-bold text-gray-600">gener8tor</div>
            <div className="text-2xl font-bold text-gray-600">WISCONSIN ECONOMIC DEVELOPMENT</div>
          </div>
        </div>

        {/* Partner CTA Section */}
        <div className="w-full bg-[#2D7DD2] text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner With Voyager AI</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Built for the Financial Industry, Voyager AI addresses a wide range of compliance challenges, including AML/KYC, sanctions screening, data privacy, and more...
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-[#2D7DD2] hover:bg-gray-100">
            Become a Partner
          </Button>
        </div>
      </div>
    </section>
  );
}