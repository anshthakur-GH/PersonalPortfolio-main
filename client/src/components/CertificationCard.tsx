import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
  icon: string;
  isAchievement?: boolean;
}

const CertificationCard = ({ 
  title, 
  issuer, 
  date, 
  description, 
  link, 
  icon, 
  isAchievement = false 
}: CertificationCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <motion.div 
      ref={ref}
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start mb-4">
        <div className="bg-primary/10 rounded-lg p-3 mr-4">
          <i className={`fas ${isAchievement ? 'fa-trophy' : 'fa-certificate'} text-primary text-xl`}></i>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-500">{issuer}</p>
        </div>
      </div>
      <p className="mb-4 text-gray-600">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{date}</span>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
            {isAchievement ? 'View Project' : 'View Certificate'}
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default CertificationCard;
