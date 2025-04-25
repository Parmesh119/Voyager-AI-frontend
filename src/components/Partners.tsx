import { Button } from '@/components/ui/button';
import { UserRound } from 'lucide-react';

export function Partners() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-24 items-center mt-12 opacity-60">
            <img src="https://kaskade.cloud/wp-content/uploads/2020/08/aws-logo.png" alt="AWS" className="h-36 w-auto mx-auto" />
            <img src="https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Logo.png" alt="Google Cloud" className="h-32 mx-auto w-64" />
            <img src="https://media.licdn.com/dms/image/v2/D560BAQFCIa7TE6AOYQ/company-logo_200_200/company-logo_200_200/0/1664420970990/augustbrown4u_logo?e=2147483647&v=beta&t=29cuWFRJpbBRMxubPO2aF9AWtLYK_-4NX1a2z7nIEac" alt="August Brown" className="h-36 w-40 mx-auto" />
            <img src="https://neoris.com/documents/20126/41386/microsoft-azure-logo+%281%29.jpg/706fd113-e379-dbe7-560f-a63c59a01856?version=1.0&t=1644322743646&imagePreview=1" alt="Microsoft Azure" className="h-36 w-56 mx-auto" />
          </div>
        </div>
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-3 py-1 bg-[#ECFFD9] text-[#75AA00] rounded-full text-sm font-medium">
            <span className='flex flex-row gap-2'><UserRound className='h-5 w-4' />Friends</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            We've got <span className="text-[#2D7DD2]">acolades from</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center opacity-60">
            <div className="text-2xl font-bold text-gray-600">FOR-M by mke tech</div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrybBJsaEdn3WrSk3PGEre7nYB4BxM99TWw&s" alt="gener8tor" className="h-16 w-64 mx-auto" />
            <img src="https://www.momentumwest.org/media/userfiles/subsite_16/images/bd/wedc_rev.jpg" alt="WISCONSIN ECONOMIC DEVELOPMENT" className="h-36 w-56 mx-auto" />
          </div>
        </div>
      </div>

      {/* Full width blue section - moved outside the container */}
      <div className="w-full">
        <div className="bg-[#2D7DD2] text-white w-full py-16 px-0 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner With Voyager AI</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 lg:p-0 p-4">
            Built for the Financial Industry, Voyager AI addresses a wide range of compliance challenges, including AML/KYC, sanctions screening, data privacy, and more...
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-[#2D7DD2] hover:bg-gray-100 font-bold">
            Become a Partner
          </Button>
        </div>
      </div>
    </section>
  );
}