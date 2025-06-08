'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Network, Code2, Microscope, Zap, GitGraph } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  color: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function EnhancedFeatureSection() {
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: <Network />,
      title: "Dependency Graph",
      description: "Interactive visualization of project dependencies with real-time updates.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Code2 />,
      title: "Smart Navigation",
      description: "Jump to definitions and references with a single click.",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <Microscope />,
      title: "Deep Analysis",
      description: "Detect conflicts, vulnerabilities, and unused dependencies.",
      color: "from-amber-500 to-orange-400"
    },
    {
      icon: <Zap />,
      title: "Performance Impact",
      description: "Analyze how dependencies affect your project's performance.",
      color: "from-emerald-500 to-green-400"
    },
    {
      icon: <GitGraph />,
      title: "Version Control",
      description: "Track dependency changes across commits and branches.",
      color: "from-indigo-500 to-blue-400"
    }
  ];

  return (
    <div 
      id="features"
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
        
        <div className="relative bg-background/50 backdrop-blur-sm rounded-3xl border border-border shadow-lg overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
          
          <div className="p-8 md:p-12">
            <motion.div 
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Powerful Visualization Tools
              </h2>
              <p className="text-foreground/70 text-lg">
                CodeGraph transforms complex code dependencies into clear, interactive visualizations that help you understand your project structure at a glance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                  color={feature.color}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function FeatureCard({ icon, title, description, index, color }: FeatureCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative bg-background/30 hover:bg-background/50 rounded-xl border border-border shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} style={{ padding: '1px' }}>
        <div className="h-full w-full rounded-xl" />
      </div>

      <div className="relative p-6">
        <motion.div 
          className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${color} bg-opacity-10 text-foreground mb-4 group-hover:scale-110 transition-transform duration-300`}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {icon}
        </motion.div>
        
        <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
} 