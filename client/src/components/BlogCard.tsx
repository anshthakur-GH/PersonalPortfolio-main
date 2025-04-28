import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  link: string;
  icon: string;
}

const BlogCard = ({ title, excerpt, date, category, link, icon }: BlogCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <motion.div 
      ref={ref}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-48 bg-gray-200 relative">
        {/* Blog Image Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/70 to-accent/70">
          <i className={`fas ${icon} text-white text-4xl`}></i>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{category}</span>
          <span className="ml-auto text-sm text-gray-500">{date}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-500 mb-4">{excerpt}</p>
        
        <a href={link} className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
          Read More <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </motion.div>
  );
};

export default BlogCard;
