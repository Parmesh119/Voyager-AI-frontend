import { Card, CardContent } from '@/components/ui/card';
import { BriefcaseBusiness } from 'lucide-react';
export function StrategicTools() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center mb-12">
          <div className="flex flex-row px-3 py-1 gap-2 bg-[#ECFFD9] text-[#75AA00] rounded-full text-sm font-medium">
            <BriefcaseBusiness className='w-4 h-5' /> Strategic Tools
          </div>
        </div>

        <div className="flex flex-col items-center mb-16">
          <div className="grid grid-cols-3 gap-8 w-full max-w-3xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#75AA00] mb-2">Summarize</h3>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#2D7DD2] mb-2">Analyze</h3>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#2D7DD2] mb-2">Recommend</h3>
            </div>
          </div>
        </div>

        <Card className="bg-white shadow-lg rounded-xl">
          <CardContent className="p-8 text-center">
            <p className="text-gray-600 text-lg font-bold tracking-wide">
              Our AI platform transforms complex regulatory requirements into simplified, automated workflows—reducing compliance costs by up to 90% while eliminating human error.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}