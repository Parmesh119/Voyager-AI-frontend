import { Search, FileLock2, BriefcaseBusiness, Megaphone, BrainCog } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import PdfIcon from '@/assets/CoreFeatures/PdfIcon';
export function CoreFeatures() {
  return (
    <section className="w-full py-24 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center">
          <div className="flex flex-row mb-4 gap-2 px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium">
            <Search className='w-4 h-5' />
            Intelligent Features
          </div>
        </div>

        <div className="flex flex-col items-center text-center mb-12 font-[Arial_Rounded_MT_Bold]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Voyager AI <span className="text-[#2D7DD2]">Core Product Features</span>
          </h2>
          <p className="text-gray-600 max-w-2xl font-[Arial]">
            Built for the Financial Industry, Voyager AI addresses a wide range of compliance<br /> challenges, including AML/KYC, sanctions screening, data privacy, and more...
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FileLock2 className="h-8 w-8 text-[#1d801a] p-1.5 bg-[#e4f4be] rounded-lg"  />}
            title="Regulatory Briefs"
            description={
              <>
                <strong>Access clear, AI-powered summary alerts of regulatory changes.</strong><br /> Voyager AI (VAI) creates accurate, summarized updates on federal and state policies, ensuring you're always informed.
              </>
            }
          />

          <FeatureCard
            icon={<PdfIcon />}
            title="Policy Execution Engine"
            description={
              <>
                <strong>Seamlessly translate compliance<br /> updates into action.</strong><br /> VAI automates policy updates and integrates with your institution’s policy store, ensuring regulatory compliance.
              </>
            }
          />

          <FeatureCard
            icon={<BriefcaseBusiness className="h-8 w-8 text-[#1d801a] p-1.5 bg-[#e4f4be] rounded-lg" />}
            title="Institutional Awareness"
            description={
              <>
                <strong>An AI continuously refining itself from your live policies—in real time.</strong><br /> VAI continuously learns from your compliance data, refining risk models and adapting to your unique evolving regulatory environment.
              </>}
          />

          <FeatureCard
            icon={<Search className="h-8 w-8 text-[#1d801a] p-1.5 bg-[#e4f4be] rounded-lg" />}
            title="Regulatory Insight Engine"
            description={
              <>
              <strong>Instantly explore and interpret the latest federal and state regulations.</strong><br /> VAI provides deep regulatory research and real-time insights, helping you stay compliant without manual effort.</>}
          />

          <FeatureCard
            icon={<Megaphone className="h-8 w-8 text-[#1d801a] p-1.5 bg-[#e4f4be] rounded-lg" />}
            title="AI Compliance Advisor"
            description={
              <><strong>Stay ahead of evolving regulations with AI-driven recommendations.</strong><br/> VAI analyzes your position and suggests precise compliance actions, helping you future-proof your compliance strategy.</>}
          />

          <FeatureCard
            icon={<BrainCog className="h-8 w-8 text-[#1d801a] p-1.5 bg-[#e4f4be] rounded-lg" />}
            title="On-Premise AI Engine"
            description={<><strong>Compliance data, fully protected inside your secure environment. </strong><br/> VAI ensures secure, on-premise storage of policies, offering real-risk analysis maintaining complete regulatory and data security.</>}
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-white shadow-lg duration-300 transform hover:-translate-y-1">
      <CardContent className="pt-6">
        <div className="mb-4">{icon}</div>
        <span className='space-y-4'><h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm/6">{description}</p></span>
      </CardContent>
    </Card>
  );
}