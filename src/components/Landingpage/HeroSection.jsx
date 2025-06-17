import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { Sparkles, Sticky } from 'lucide-react';
import { Button } from '../ui/button';
import { Sparkles, StickyNote } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-gray via-navy to-teal relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-teal/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <StickyNote className="w-16 h-16 mx-auto mb-4 text-teal animate-float" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-teal to-light-gray bg-clip-text text-transparent"
          >
            Sticky Notes Canvas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-light-gray max-w-3xl mx-auto"
          >
            A collaborative canvas where anyone can drop quick notes, ideas, or names. 
            Think of it as a sticky wall of thoughts — simple, fun, and open to all!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-teal hover:bg-teal/80 text-white px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Try It Now
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-teal text-teal hover:bg-teal hover:text-white px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105"
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16"
          >
            <p className="text-light-gray/60 text-sm">Infinite space • Infinite ideas</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
