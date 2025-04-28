import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import SectionTitle from '@/components/SectionTitle';
import CertificationCard from '@/components/CertificationCard';
import { certificationsData, achievementsData } from '@/data/certifications';

const Certifications = () => {
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

  const combinedData = [...certificationsData, ...achievementsData].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Certifications &" highlight="Achievements" />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {combinedData.map((item, index) => (
            <CertificationCard
              key={index}
              title={item.title}
              issuer={item.issuer}
              date={item.date}
              description={item.description}
              link={item.link}
              icon={item.icon}
              isAchievement={item.isAchievement}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
