import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { projectsData } from '@/data/projects';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="My" highlight="Projects" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              github={project.github}
              demo={project.demo}
              icon={project.icon}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-2 px-6 rounded-lg transition-colors">
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
