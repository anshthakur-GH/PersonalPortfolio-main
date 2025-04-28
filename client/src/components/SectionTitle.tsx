import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface SectionTitleProps {
  title: string;
  highlight: string;
}

const SectionTitle = ({ title, highlight }: SectionTitleProps) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <motion.h2 
      ref={ref}
      className="text-3xl md:text-4xl font-bold font-inter mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
      {title} <span className="text-primary">{highlight}</span>
    </motion.h2>
  );
};

export default SectionTitle;
