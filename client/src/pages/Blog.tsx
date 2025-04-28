import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import SectionTitle from '@/components/SectionTitle';
import BlogCard from '@/components/BlogCard';
import { blogData } from '@/data/blog';

const Blog = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;

  return (
    <section id="blog" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="My" highlight="Blog" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              category={post.category}
              link={post.link}
              icon={post.icon}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-2 px-6 rounded-lg transition-colors">
            View All Posts
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
