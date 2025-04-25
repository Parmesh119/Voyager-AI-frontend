import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export function Architecture() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center mb-8">
          <div className="inline-block px-3 py-1 bg-[#ECFFD9] text-[#75AA00] rounded-full text-sm font-medium">
            Knowledge Database
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Understanding <span className="text-[#2D7DD2]">the Architecture</span>
        </h2>

        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Let's Go Beyond the layers of Voyager to understand how it enables the ability to explore knowledge.
        </p>

        {/* Agents Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Comparison Agent</h3>
                <div className="w-8 h-8 bg-[#2D7DD2] rounded-lg"></div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Horizon Agent</h3>
                <div className="w-8 h-8 bg-[#40B4C7] rounded-lg"></div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Analysis Agent</h3>
                <div className="w-8 h-8 bg-[#75AA00] rounded-lg"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-gray-600 max-w-2xl mx-auto mb-16 text-center">
          Meet your digital compliance guardians. These intelligent agents don't just read regulations–they breathe them. Transforming complex rules into actionable insights, they're the vigilant sentinels protecting your financial institution's integrity.
        </div>

        {/* Domain Core Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-[#2D7DD2] p-12 rounded-2xl">
            <div className="text-white text-2xl font-bold mb-4">Domain Core</div>
            <div className="w-32 h-32 text-white">
              <img src="/path/to/domain-core-icon.svg" alt="Domain Core" className="w-full h-full" />
            </div>
          </div>
          <div>
            <p className="text-gray-600">
              Our Domain-Focused database is an infinite library of wisdom. No matter what type of financial institution, the knowledge has already been curated and primed to support depth and accuracy far beyond any generic AI!
            </p>
          </div>
        </div>

        {/* Knowledge Core Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-gray-600">
              We've created a secure vault where your existing documents are AI-empowered, compliant, and intelligent, allowing them to work smarter, not harder. We offer many options, from on-premises to cloud, ensuring your FI's core knowledge remains under your control.
            </p>
          </div>
          <div className="bg-[#75AA00] p-12 rounded-2xl order-1 md:order-2">
            <div className="text-white text-2xl font-bold mb-4">Knowledge Core</div>
            <div className="w-32 h-32 text-white">
              <img src="/path/to/knowledge-core-icon.svg" alt="Knowledge Core" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}