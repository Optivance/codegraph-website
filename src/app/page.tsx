'use client'
import React from 'react';
import { ArrowRight, Code, Network, GitGraph, Workflow } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CodeGraphNavbar } from '../components/ui/CodeGraphNavbar';
import { TextReveal } from '../components/magicui/text-reveal';
import Link from 'next/link';
import { EnhancedFeatureSection } from '../components/ui/EnhancedFeatureSection';
import { CodeGraphGeminiEffect } from '../components/ui/CodeGraphGeminiEffect';
import { EnhancedCTA } from '../components/ui/EnhancedCTA';
import CodeGraphFooter from '../components/ui/CodeGraphFooter';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  const glowEffect = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: [0.5, 1, 0.5], 
      scale: [0.8, 1, 0.8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const connectionLines = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" }
    }
  };

  const features = [
    {
      icon: <Code className="h-6 w-6 text-blue-500" />,
      title: "Multi-Language Support",
      description: "Visualize dependencies across Python, JavaScript, TypeScript, Java, and more programming languages."
    },
    {
      icon: <Network className="h-6 w-6 text-blue-500" />,
      title: "Interactive Graphs",
      description: "Explore your codebase with interactive dependency graphs that help you understand relationships at a glance."
    },
    {
      icon: <GitGraph className="h-6 w-6 text-blue-500" />,
      title: "Dependency Analysis",
      description: "Identify circular dependencies, unused code, and optimize your project structure."
    },
    {
      icon: <Workflow className="h-6 w-6 text-blue-500" />,
      title: "VS Code Integration",
      description: "Seamlessly integrated with VS Code for a smooth development experience."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CodeGraphNavbar />
      
      {/* Hero Section with Glow Effect */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl dark:from-blue-500/10 dark:to-purple-500/10"
          variants={glowEffect}
          initial="hidden"
          animate="visible"
        />
        
        <motion.div 
          className="relative z-10 text-center px-4"
          style={{ scale }}
        >
          <motion.h1 
            className="text-5xl md:text-8xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Code to Graph
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Visualize Dependencies
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-12 sm:px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Simplify your codebase understanding with powerful visualization tools
            that transform complex dependencies into clear, interactive graphs.
          </motion.p>

          <motion.div 
            className="flex gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="https://marketplace.visualstudio.com/items?itemName=CodeGraph.dependency-visualizer" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.button
                className="px-5 sm:px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-lg font-semibold text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="hidden sm:inline ml-2" />
              </motion.button>
            </motion.a>
            <Link href="/docs">
              <motion.button
                className="px-8 py-4 border border-border rounded-lg text-lg font-semibold"
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Documentation
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Network Visualization */}
      <CodeGraphGeminiEffect 
        title="Transform Your Codebase" 
        description="CodeGraph helps you understand complex code relationships through beautiful visualizations" 
      />

      {/* Enhanced Features Section */}
      <EnhancedFeatureSection />

      {/* Enhanced CTA Section */}
      <EnhancedCTA />

      {/* Footer */}
      <CodeGraphFooter />
    </div>
  );
}