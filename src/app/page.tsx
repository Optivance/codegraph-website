'use client';

import { ArrowRight, Code2, GitGraph, Microscope, Zap, FileCode, BrainCircuit } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

interface LanguageCardProps {
  icon: React.ReactNode;
  language: string;
  features: string[];
  index: number;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed w-full bg-background/80 backdrop-blur-sm z-50 "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
          >
            <GitGraph className="h-6 w-6 text-primary" />
            <span className="font-semibold text-lg">Dependency Analytics</span>
          </motion.div>
          <div className="flex items-center space-x-4">
           <motion.div whileHover={{ scale: 1.05 }}>
              <button className='  text-black bg-white py-2 px-6 rounded-lg'>Download</button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <Badge variant="secondary" className="mb-4">
              v2.0 Now Available
            </Badge> */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6">
              Visualize Dependencies Across
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text"> Multiple Languages</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A powerful VS Code extension for visualizing and managing project dependencies in Python, TypeScript, and Java projects.
            </p>
            <div className="flex justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 flex px-6 py-2 text-black rounded-lg">
                  Get Started
                  <ArrowRight className="ml-2 mt-1 h-5 w-5" />
                </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className='border border-white py-2 px-4 rounded-lg' >
                  View Documentation
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Language Support */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Supported Languages
        </motion.h2>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <LanguageCard
            icon={<FileCode className="h-12 w-12 text-yellow-500" />}
            language="Python"
            features={['pip dependencies', 'Virtual environments', 'Package analysis']}
            index={0}
          />
          <LanguageCard
            icon={<Code2 className="h-12 w-12 text-blue-500" />}
            language="TypeScript"
            features={['npm packages', 'Type definitions', 'Module resolution']}
            index={1}
          />
          <LanguageCard
            icon={<BrainCircuit className="h-12 w-12 text-red-500" />}
            language="Java"
            features={['Maven/Gradle', 'Class hierarchy', 'Method references']}
            index={2}
          />
        </motion.div>
      </div>

      {/* Features Grid */}
      <div 
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
          {/* Gradient background with multiple layers for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-blue-500/5 rounded-3xl blur-2xl" />
          
          <div className="relative bg-background/80 backdrop-blur-sm rounded-3xl border shadow-lg overflow-hidden">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            
            <div className="p-8 md:p-12">
              <motion.div 
                variants={fadeInUp}
                className="text-center max-w-2xl mx-auto mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Powerful Features
                </h2>
                <p className="text-lg text-muted-foreground">
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

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500" />
          <div className="relative p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Optimize Your Development Workflow?
            </h2>
            <p className="text-blue-50 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are using Dependency Analytics to improve their development experience.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="py-2 px-6 text-black">
                Install Extension
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative bg-card hover:bg-accent/50 rounded-xl border shadow-sm transition-all duration-300"
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '1px' }}>
        <div className="h-full w-full bg-card rounded-xl" />
      </div>

      {/* Content */}
      <div className="relative p-6">
        <motion.div 
          className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          {icon}
        </motion.div>
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function LanguageCard({ icon, language, features, index }: LanguageCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group bg-card hover:bg-accent/50 p-8 rounded-xl border shadow-sm transition-colors duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <motion.div 
        className="mb-6"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-semibold mb-4">{language}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center text-muted-foreground"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}