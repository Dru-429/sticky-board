
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ThankYouSection from './ThankYouSection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      <HeroSection />
      <FeaturesSection />
      <ThankYouSection />
      <Footer />
    </motion.div>
  );
};

export default LandingPage;
