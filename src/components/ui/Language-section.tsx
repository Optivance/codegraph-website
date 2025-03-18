import React from 'react';
import { motion } from 'framer-motion';
import { FileCode, Code2, BrainCircuit } from 'lucide-react';


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

function LanguageCard({ icon, language, features, index }: LanguageCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group bg-black/50 hover:bg-black/70 p-8 rounded-xl border border-white/10 shadow-lg transition-colors duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <motion.div 
        className="mb-6"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-semibold mb-4 text-white">{language}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center text-gray-300"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export function LanguageSection() {
  return (
    <>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center mb-12 text-white"
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
    </>
  );
}