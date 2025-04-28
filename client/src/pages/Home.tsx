import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-inter mb-4 text-foreground">
              Hello, I'm <span className="text-primary">Archie Sahu</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-500 mb-6">
              On a Journey to Build, Learn, and Impact
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              A Computer Science Engineering student passionate about creating innovative solutions 
              and exploring the world of technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl">
                View My Projects
              </a>
              <a href="#contact" className="border-2 border-primary text-primary hover:bg-primary/5 font-medium py-3 px-6 rounded-lg transition-all">
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 flex justify-center md:justify-end order-1 md:order-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Profile Image */}
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl relative">
              <img 
                src={profileImage} 
                alt="Archie Sahu" 
                className="w-full h-full" 
                style={{ objectFit: "cover", objectPosition: "52% 50%" }}
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-24 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="animate-bounce">
            <a href="#about" className="text-primary">
              <i className="fas fa-chevron-down text-2xl"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
