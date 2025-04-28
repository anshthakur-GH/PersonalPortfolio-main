import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import SectionTitle from '@/components/SectionTitle';
import ProgressBar from '@/components/ProgressBar';
import SkillList from '@/components/SkillList';
import { skillsData, otherSkills } from '@/data/skills';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="My" highlight="Skills" />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {skillsData.map((category, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              variants={cardVariants}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg mr-4">
                  <i className={`fas ${category.icon}`}></i>
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.type === 'progress' && category.skills && category.skills.map((skill, idx) => (
                  <ProgressBar key={idx} label={skill.name} percentage={skill.level} />
                ))}
                {category.type === 'list' && category.listSkills && (
                  <SkillList skills={category.listSkills} />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Other Skills</h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {otherSkills.map((skill, index) => (
              <motion.span 
                key={index} 
                className="px-4 py-2 bg-white rounded-full shadow-md text-primary"
                variants={chipVariants}
                custom={index}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
