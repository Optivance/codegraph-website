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
        <Link href="/">
          <motion.div 
            className="flex items-center space-x-4 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <GitGraph className="h-6 w-6 text-blue-500" />
            <span className="font-semibold text-lg text-white">Optivance</span>
          </motion.div>
        </Link>
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