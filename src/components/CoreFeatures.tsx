import { FileText, Cog, Brain, Search, Shield, Server } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function CoreFeatures() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gray-50 mt-10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center">
          <div className="inline-block mb-4 px-3 py-1 bg-[#ECFFD9] text-[#75AA00] rounded-full text-sm font-medium">
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
            icon={<FileText className="h-6 w-6 text-[#75AA00]" />}
            title="Regulatory Briefs"
            description="Access clear, AI-powered summary alerts of regulatory changes. Voyager AI (VAI) creates accurate, summarized updates on federal and state policies, ensuring you're always informed."
          />
          
          <FeatureCard
            icon={<Cog className="h-6 w-6 text-[#75AA00]" />}
            title="Policy Execution Engine"
            description="Seamlessly translate compliance updates into action. VAI automates policy updates and integrates with your institution's policy store, ensuring regulatory compliance."
          />
          
          <FeatureCard
            icon={<Brain className="h-6 w-6 text-[#75AA00]" />}
            title="Institutional Awareness"
            description="An AI continuously refining itself from your live policies—in real time. VAI continuously learns from your compliance data, refining risk models and adapting to your unique evolving regulatory environment."
          />
          
          <FeatureCard
            icon={<Search className="h-6 w-6 text-[#75AA00]" />}
            title="Regulatory Insight Engine"
            description="Instantly explore and interpret the latest federal and state regulations. VAI provides deep regulatory research and real-time insights, helping you stay compliant without manual effort."
          />
          
          <FeatureCard
            icon={<Shield className="h-6 w-6 text-[#75AA00]" />}
            title="AI Compliance Advisor"
            description="Stay ahead of evolving regulations with AI-driven recommendations. VAI analyzes your position and suggests precise compliance actions, helping you future-proof your compliance strategy."
          />
          
          <FeatureCard
            icon={<Server className="h-6 w-6 text-[#75AA00]" />}
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
  description: string;
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