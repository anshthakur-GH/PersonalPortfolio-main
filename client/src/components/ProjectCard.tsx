import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  icon: string;
}

const ProjectCard = ({ title, description, tags, github, demo, icon }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <motion.div 
      ref={ref}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-48 bg-gray-200 relative">
        {/* Project Image Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/70 to-accent/70">
          <i className={`fas ${icon} text-white text-4xl`}></i>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md">{tag}</span>
          ))}
        </div>
        
        <div className="flex justify-between">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium">
            <i className="fab fa-github mr-1"></i> GitHub
          </a>
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium">
              <i className="fas fa-external-link-alt mr-1"></i> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
