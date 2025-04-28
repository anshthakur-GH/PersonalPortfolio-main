import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  icon: string;
  index: number;
}

const TimelineItem = ({ title, company, period, description, skills, icon, index }: TimelineItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="timeline-item relative mb-16 md:mb-20">
      <motion.div 
        className="md:w-1/2 ml-10 md:ml-0 relative z-10"
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : (isEven ? -50 : 50) }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className={`timeline-content bg-white p-6 rounded-xl shadow-lg border border-gray-100 ${isEven ? 'md:ml-auto' : ''}`}>
          <div className="absolute md:left-0 left-0 top-5 md:-translate-x-full md:pr-8 pr-0 flex items-center">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
              <i className={`fas ${icon}`}></i>
            </div>
          </div>
          
          <div className="timeline-dot w-4 h-4 rounded-full bg-primary absolute top-5 md:left-0 left-0 md:-translate-x-1/2 -translate-x-1/2"></div>
          
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-500 mb-2">{company}</p>
          <p className="text-sm text-gray-500 mb-4">{period}</p>
          <p className="mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md">{skill}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineItem;
