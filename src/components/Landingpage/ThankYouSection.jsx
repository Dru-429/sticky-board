import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const ThankYouSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-teal to-navy relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Heart className="w-6 h-6 text-white/20" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="mb-8"
          >
            <Sparkles className="w-16 h-16 mx-auto text-white/80" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Built with <Heart className="inline w-8 h-8 text-red-400 mx-2" /> by Dru
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-light-gray"
          >
            Thanks for checking this out! Feel free to leave your name below. 🙏
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20"
          >
            <p className="text-lg mb-4 text-light-gray">
              "This is a collaborative canvas where anyone can drop quick notes, ideas, or names. 
              Think of it as a sticky wall of thoughts — simple, fun, and open to all!"
            </p>
            <p className="text-sm text-white/60">
              Got infinite space and infinite ideas ✨
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYouSection;
