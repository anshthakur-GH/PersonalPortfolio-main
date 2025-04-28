import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface ProgressBarProps {
  label: string;
  percentage: number;
}

const ProgressBar = ({ label, percentage }: ProgressBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    if (isVisible && !animate) {
      setAnimate(true);
    }
  }, [isVisible, animate]);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: animate ? `${percentage}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
