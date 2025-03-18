import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GitGraph, Code2, Microscope, Zap } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function FeatureSection() {
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div 
    id='features'
      ref={featuresRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <motion.div
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-blue-500/5 rounded-3xl blur-2xl" />
        
        <div className="relative bg-black/50 backdrop-blur-sm rounded-3xl border border-white/10 shadow-lg overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
          
          <div className="p-8 md:p-12">
            <motion.div 
              variants={fadeInUp}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Powerful Features
              </h2>
              <p className="text-gray-400">
                Everything you need to analyze and manage your project dependencies effectively
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<GitGraph className="h-8 w-8" />}
                title="Dependency Graph"
                description="Interactive visualization of project dependencies with real-time updates."
                index={0}
              />
              <FeatureCard
                icon={<Code2 className="h-8 w-8" />}
                title="Smart Navigation"
                description="Jump to definitions and references with a single click."
                index={1}
              />
              <FeatureCard
                icon={<Microscope className="h-8 w-8" />}
                title="Deep Analysis"
                description="Detect conflicts, vulnerabilities, and unused dependencies."
                index={2}
              />
              <FeatureCard
                icon={<Zap className="h-8 w-8" />}
                title="Performance Impact"
                description="Analyze how dependencies affect your project's performance."
                index={3}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative bg-black/50 hover:bg-black/70 rounded-xl border border-white/10 shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ padding: '1px' }}>
        <div className="h-full w-full rounded-xl" />
      </div>

      <div className="relative p-6">
        <motion.div 
          className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          {icon}
        </motion.div>
        
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
}