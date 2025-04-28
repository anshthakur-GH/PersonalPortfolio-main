import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import SectionTitle from '@/components/SectionTitle';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;

  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: (formData: ContactForm) => {
      return apiRequest('POST', '/api/contact', formData);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I will get back to you soon!",
        variant: "default",
      });
      setContactForm({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(contactForm);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Get In" highlight="Touch" />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-gray-500 mb-8">
              Feel free to reach out to me for collaborations, opportunities, or just to say hello! 
              I'm always open to discussing new projects and ideas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg mr-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a href="mailto:archiesahu19@gmail.com" className="text-gray-500 hover:text-primary transition-colors">archiesahu19@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg mr-4">
                  <i className="fab fa-linkedin"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/archie-sahu-1b3b47280" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">linkedin.com/in/archie-sahu-1b3b47280</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg mr-4">
                  <i className="fab fa-github"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium">GitHub</h4>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">github.com/username</a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Social Media</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/archie-sahu-1b3b47280" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors">
                  <i className="fab fa-medium"></i>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="bg-gray-50 rounded-2xl p-8 shadow-lg"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-500 font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring focus:ring-primary/30 transition-colors outline-none" 
                  placeholder="John Doe" 
                  value={contactForm.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-500 font-medium mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring focus:ring-primary/30 transition-colors outline-none" 
                  placeholder="john@example.com" 
                  value={contactForm.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-500 font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring focus:ring-primary/30 transition-colors outline-none" 
                  placeholder="Project Collaboration" 
                  value={contactForm.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-500 font-medium mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring focus:ring-primary/30 transition-colors outline-none" 
                  placeholder="Hello, I would like to discuss..." 
                  value={contactForm.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
