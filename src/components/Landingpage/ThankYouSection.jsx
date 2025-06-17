import { motion } from 'framer-motion';
import { Github, Linkedin, Heart, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-teal">Sticky Notes Canvas</h3>
            <p className="text-light-gray mb-4">
              A collaborative space for sharing thoughts, ideas, and connections. 
              Simple, fun, and open to everyone.
            </p>
            <p className="text-sm text-white/60">
              Made with <Heart className="inline w-4 h-4 text-red-400 mx-1" /> and creativity
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Project Links</h4>
            <div className="space-y-3">
              <motion.a
                href="https://github.com/Dru-429/sticky-notes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-light-gray hover:text-teal transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Github className="w-4 h-4 mr-2" />
                Source Code
                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
              <motion.a
                href="https://github.com/Dru-429/sticky-notes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-light-gray hover:text-teal transition-colors group"
                whileHover={{ x: 5 }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Connect with Dru</h4>
            <div className="flex space-x-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-teal text-teal hover:bg-teal hover:text-white transition-all"
                  asChild
                >
                  <a
                    href="https://github.com/Dru-429"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-teal text-teal hover:bg-teal hover:text-white transition-all"
                  asChild
                >
                  <a
                    href="https://linkedin.com/in/dru-429"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8 text-center"
        >
          <p className="text-white/60 text-sm">
            © 2025 Sticky Notes Canvas. Built with React, Tailwind CSS & Framer Motion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
