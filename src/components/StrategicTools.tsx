import { Card, CardContent } from '@/components/ui/card';
import { BriefcaseBusiness } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function StrategicTools() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('summarize');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contentMap = {
    summarize: <>Our AI platform transforms complex regulatory requirements into<br/>simplified, automated workflows—reducing compliance costs by<br/>up to 90% while eliminating human error.</>,
    analyze: <>Our AI meticulously examines financial institutions' existing<br/>policies, identifying potential compliance gaps and areas for<br/>improvement.</>,
    recommend: <>Based on its analysis, Voyager AI suggests necessary policy<br/>changes or creates new ones, ensuring your<br/>institution stays ahead of regulatory requirements.</>
  };

  interface TabClickHandler {
    (tab: string): void;
  }

  const handleTabClick: TabClickHandler = (tab) => {
    if (tab === activeTab || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full py-20 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <div 
          className={`flex justify-center mb-12 transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="flex items-center gap-2 px-6 py-2 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium shadow-sm">
            <BriefcaseBusiness className="w-4 h-4" /> Strategic Tools
          </div>
        </div>

        <div className="flex flex-col items-center mb-16 max-w-3xl mx-auto">
          <div 
            className={`grid lg:grid-cols-3 grid-cols-1 gap-8 w-full max-w-3xl transition-all duration-700 ease-out delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {['summarize', 'analyze', 'recommend'].map((tab, index) => (
              <div key={tab} className="text-center">
                <button 
                  onClick={() => handleTabClick(tab)}
                  className={`text-4xl font-bold transition-all duration-500 ease-out hover:scale-105 active:scale-95 relative ${activeTab === tab ? 'bg-gradient-to-r from-[#6CC644] to-[#3EC6E0] text-transparent bg-clip-text' : 'text-[#2D7DD2]'}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {activeTab === tab && (
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#6CC644] to-[#3EC6E0] rounded-full transition-all duration-500 ease-in-out"></span>
                  )}
                </button>
              </div>
            ))}
          </div>

          <div
            className={`w-full mt-12 transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <div 
              className="transition-all duration-500 ease-out transform hover:-translate-y-2 hover:shadow-xl"
            >
              <Card className="bg-white shadow-lg rounded-3xl overflow-hidden w-full">
                <CardContent className="p-12 text-center relative h-48 flex items-center justify-center">
                  {Object.keys(contentMap).map((key) => (
                    <p 
                      key={key}
                      className={`absolute inset-0 flex items-center justify-center text-gray-600 text-lg font-bold tracking-normal leading-relaxed px-8 transition-all duration-700 ease-in-out transform
                        ${activeTab === key ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                        ${isTransitioning ? 'blur-sm' : 'blur-0'}`}
                    >
                      {contentMap[key as keyof typeof contentMap]}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}