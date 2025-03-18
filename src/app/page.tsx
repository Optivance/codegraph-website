'use client'
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navbar } from '../components/ui/Navbar';
import { LanguageSection } from '../components/ui/Language-section';
import { FeatureSection } from '../components/ui/Feature-section';
import Footer from '../components/ui/Footer-section';
import { div } from 'framer-motion/client';
import { TextReveal } from '../components/magicui/text-reveal';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  const lampGlow = {
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

  return (
    <div className="min-h-screen bg-black text-white ">
      <Navbar />
      
      {/* Hero Section with Lamp Effect */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
          variants={lampGlow}
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
            Visualize Dependencies
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text ">
              Across Languages
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 sm:px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A powerful VS Code extension for visualizing and managing project dependencies
            in Python, TypeScript, and Java projects.
          </motion.p>

          <motion.div 
            className="flex gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className=" px-5 sm:px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="hidden sm:inline ml-2" />
            </motion.button>
            <motion.button
              className="px-8 py-4 border border-white/20 rounded-lg text-lg font-semibold"
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Documentation
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Animated line  */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
          <motion.path
            d="M20,50 C40,20 60,80 80,50"
            stroke="url(#gradient)"
            strokeWidth="0.5"
            fill="none"
            variants={connectionLines}
            initial="hidden"
            animate="visible"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
     <TextReveal className="">
      Optivance changes the way you visualise your code.
     </TextReveal>

      <LanguageSection />
      <FeatureSection />
     <Footer />
    </div>

   
  );
}