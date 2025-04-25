import { FileText, Search, FileLock2, BriefcaseBusiness, Megaphone, BrainCog } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function CoreFeatures() {
  return (
    <section className="w-full py-24 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center">
          <div className="flex flex-row mb-4 gap-2 px-3 py-1 bg-[#ECFFD9] text-[#75AA00] rounded-full text-sm font-medium">
            <Search className='w-4 h-5' />
            Intelligent Features
          </div>
        </div>

        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Voyager AI <span className="text-[#2D7DD2]">Core Product Features</span>
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Built for the Financial Industry, Voyager AI addresses a wide range of compliance challenges, including AML/KYC, sanctions screening, data privacy, and more...
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FileLock2 className="h-8 w-8 text-[#4b680d] p-1.5 bg-[#dee9c5] rounded-lg"  />}
            title="Regulatory Briefs"
            description={
              <>
                <strong>Access clear, AI-powered summary alerts of regulatory changes.</strong><br /> Voyager AI (VAI) creates accurate, summarized updates on federal and state policies, ensuring you're always informed.
              </>
            }
          />

          <FeatureCard
            icon={<FileText className="h-8 w-8 text-[#4b680d] p-1.5 bg-[#dee9c5] rounded-lg" />}
            title="Policy Execution Engine"
            description={
              <>
                <strong>Transform regulatory changes into actionable policies.</strong><br /> VAI automates the translation of compliance updates into your institution's policy store, ensuring seamless integration and compliance.
              </>
            }
          />

          <FeatureCard
            icon={<BriefcaseBusiness className="h-8 w-8 text-[#4b680d] p-1.5 bg-[#dee9c5] rounded-lg" />}
            title="Institutional Awareness"
            description={
              <>
                <strong>An AI continuously refining itself from your live policies—in real time.</strong><br /> VAI continuously learns from your compliance data, refining risk models and adapting to your unique evolving regulatory environment.
              </>}
          />

          <FeatureCard
            icon={<Search className="h-8 w-8 text-[#4b680d] p-1.5 bg-[#dee9c5] rounded-lg" />}
            title="Regulatory Insight Engine"
            description={
              <>
              <strong>Instantly explore and interpret the latest federal and state regulations.</strong><br /> VAI provides deep regulatory research and real-time insights, helping you stay compliant without manual effort.</>}
          />

          <FeatureCard
            icon={<Megaphone className="h-8 w-8 text-[#4b680d] p-1.5 bg-[#dee9c5] rounded-lg" />}
            title="AI Compliance Advisor"
            description="Stay ahead of evolving regulations with AI-driven recommendations. VAI analyzes your position and suggests precise compliance actions, helping you future-proof your compliance strategy."
          />

          <FeatureCard
            icon={<BrainCog className="h-8 w-8 text-[#4b680d] p-1.5 bg-[#dee9c5] rounded-lg" />}
            title="On-Premise AI Engine"
            description="Compliance data, fully protected inside your secure environment. VAI ensures secure, on-premise storage of policies, offering real-risk analysis maintaining complete regulatory and data security."
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
    <Card className="bg-white hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <CardContent className="pt-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}