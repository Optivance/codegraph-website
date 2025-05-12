'use client'
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navbar } from '../components/ui/Navbar';
import { LanguageSection } from '../components/ui/Language-section';
import { FeatureSection } from '../components/ui/Feature-section';
import Footer from '../components/ui/Footer-section';
import { TextReveal } from '../components/magicui/text-reveal';
import { MovingCards } from '../components/ui/aceternity/MovingCards';
import Link from 'next/link';

// Testimonial data for moving cards
const testimonials = [
  {
    quote: "This dependency visualization tool has completely transformed how our team understands codebase architecture. It's a game-changer for onboarding new developers.",
    name: "Alex Johnson",
    title: "Engineering Lead, TechCorp"
  },
  {
    quote: "I use this extension daily to navigate our complex microservices. The visual representation makes understanding dependencies intuitive and fast.",
    name: "Sarah Chen",
    title: "Senior Developer, CloudSystems"
  },
  {
    quote: "Refactoring used to be risky business, but with this tool we can immediately see the impact of changes across our entire codebase.",
    name: "Michael Rodriguez",
    title: "Software Architect, FinTech Solutions"
  },
  {
    quote: "The interactive graph visualization has dramatically reduced the time it takes to understand service relationships in our codebase.",
    name: "Priya Patel",
    title: "DevOps Engineer, DataFlow"
  },
  {
    quote: "As a technical lead, this tool helps me explain complex code relationships to non-technical stakeholders with ease.",
    name: "Thomas Wright",
    title: "CTO, Startup Innovations"
  }
];

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
          <motion.a
          href="https://marketplace.visualstudio.com/items?itemName=Optivance.dependency-analyzer" 
          target="_blank" 
          rel="noopener noreferrer" >
            <motion.button
              className=" px-5 sm:px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="hidden sm:inline ml-2" />
            </motion.button>
            </motion.a>
            <Link href="/docs">
            <motion.button
              className="px-8 py-4 border border-white/20 rounded-lg text-lg font-semibold"
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Documentation
            </motion.button>
            </Link>
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

      {/* Testimonials Section */}
      <div className="py-20 max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Developers Are Saying
        </motion.h2>
        <MovingCards items={testimonials} speed="slow" direction="right" />
      </div>

      <Footer />
    </div>

   
  );
}