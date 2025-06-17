import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Infinity, Zap, Heart } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Collaborative Canvas',
    description: 'Anyone can join and contribute to the shared space of ideas.',
    color: 'text-teal'
  },
  {
    icon: Infinity,
    title: 'Infinite Space',
    description: 'No limits on the number of notes or ideas you can add.',
    color: 'text-navy'
  },
  {
    icon: Zap,
    title: 'Simple & Fast',
    description: 'Just click and add your thoughts instantly - no complex setup required.',
    color: 'text-teal'
  },
  {
    icon: Heart,
    title: 'Open to All',
    description: 'Built with love for the community to share and collaborate freely.',
    color: 'text-navy'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-light-gray/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            Why Choose Our Canvas?
          </h2>
          <p className="text-xl text-navy max-w-2xl mx-auto">
            Experience the simplicity and power of collaborative thinking
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 mx-auto mb-4 p-4 rounded-full bg-gradient-to-br from-teal/20 to-navy/20 ${feature.color}`}
                  >
                    <feature.icon className="w-full h-full" />
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-dark-gray group-hover:text-teal transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-navy text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
