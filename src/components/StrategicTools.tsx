import { Card, CardContent } from '@/components/ui/card';
import { BriefcaseBusiness } from 'lucide-react';

export function StrategicTools() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 px-6 py-2 bg-[#ECFFD9] text-[#75AA00] rounded-full text-sm font-medium">
            <BriefcaseBusiness className="w-4 h-4" /> Strategic Tools
          </div>
        </div>

        <div className="flex flex-col items-center mb-16 max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-8 w-full max-w-3xl">
            <div className="text-center">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-[#6CC644] to-[#3EC6E0] text-transparent bg-clip-text">Summarize</h3>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-[#2D7DD2]">Analyze</h3>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-[#2D7DD2]">Recommend</h3>
            </div>
          </div>


          <Card className="bg-white shadow-md rounded-3xl overflow-hidden w-full mt-8">
            <CardContent className="p-12 text-center">
              <p className="text-gray-500 text-lg font-bold tracking-normal leading-relaxed">
                Our AI platform transforms complex regulatory requirements into<br/> simplified, automated workflows—reducing compliance costs by<br/> up to 90% while eliminating human error.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}