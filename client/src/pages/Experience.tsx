import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import SectionTitle from '@/components/SectionTitle';
import TimelineItem from '@/components/TimelineItem';
import { experienceData } from '@/data/experience';

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="My" highlight="Experience" />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 md:block hidden"></div>
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20 md:hidden block"></div>
          
          {experienceData.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.title}
              company={item.company}
              period={item.period}
              description={item.description}
              skills={item.skills}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
