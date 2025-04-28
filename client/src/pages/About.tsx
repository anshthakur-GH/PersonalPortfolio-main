import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import SectionTitle from '@/components/SectionTitle';
import ProgressBar from '@/components/ProgressBar';

const About = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="About" highlight="Me" />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Personal Info */}
          <motion.div variants={itemVariants}>
            <p className="text-lg mb-6 leading-relaxed">
              I'm a second-year BTech student in Computer Science Engineering, passionate about exploring the 
              fascinating worlds of Artificial Intelligence, Machine Learning, and Data Analytics.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              My journey in computing started with a curiosity about how things work behind the screen. 
              This curiosity has evolved into a dedicated pursuit of knowledge and skills in software development, 
              algorithm design, and creating meaningful applications.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll often find me reading thrillers, exploring new tech trends, or participating in coding challenges. I also have a deep interest in finance and business analytics. I enjoy learning about financial markets, investing strategies, and how technology is reshaping the financial world.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Education</h3>
                <p>BTech in Computer Science</p>
                <p className="text-gray-500">2023 - 2027</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p>Delhi, India</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Languages</h3>
                <p>Hindi, English, French, Norwegian</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Interests</h3>
                <p>AI, Automation, Data Analytics And Web Dev</p>
              </div>
            </div>
          </motion.div>
          
          {/* Technical Interests & Stats */}
          <motion.div 
            className="bg-gray-50 rounded-2xl p-8 shadow-lg"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold font-inter mb-6">Technical Interests</h3>
            
            <div className="space-y-6">
              <ProgressBar label="Artificial Intelligence" percentage={85} />
              <ProgressBar label="Machine Learning" percentage={80} />
              <ProgressBar label="Data Analytics" percentage={75} />
              <ProgressBar label="Web Development" percentage={90} />
              <ProgressBar label="Data Structures & Algorithms" percentage={85} />
            </div>
            
            <div className="grid grid-cols-2 mt-8 gap-4">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-primary text-3xl font-bold">10+</div>
                <div className="text-gray-500">Projects</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-primary text-3xl font-bold">15+</div>
                <div className="text-gray-500">Certifications</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-primary text-3xl font-bold">5+</div>
                <div className="text-gray-500">Hackathons</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-primary text-3xl font-bold">2+</div>
                <div className="text-gray-500">Years Coding</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
