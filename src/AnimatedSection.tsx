import { useInView } from 'react-intersection-observer';

import { ReactNode } from 'react';

const AnimatedSection = ({ children }: { children: ReactNode }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`transition-opacity duration-[1000ms] transform-gpu ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0'
        } parallax-section`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
