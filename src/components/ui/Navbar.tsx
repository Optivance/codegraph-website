'use client'
import React from 'react';
import { GitGraph } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed w-full bg-black/80 backdrop-blur-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-4"
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/">
            <div className="flex items-center space-x-2">
              <GitGraph className="h-6 w-6 text-blue-500" />
              <span className="font-semibold text-lg text-white">Optivance</span>
            </div>
          </Link>
        </motion.div>
        <div className="flex items-center space-x-4">
          <motion.a 
            href="https://marketplace.visualstudio.com/items?itemName=Optivance.dependency-analyzer" 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.05 }}
          >
            <button className="bg-white text-black py-2 px-6 rounded-md font-medium">
              Download
            </button>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}