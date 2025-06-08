'use client'
import React from 'react';
import { Network } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function CodeGraphNavbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-4"
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/">
            <div className="flex items-center space-x-2">
              <Network className="h-6 w-6 text-blue-500" />
              <span className="font-semibold text-lg text-foreground">CodeGraph</span>
            </div>
          </Link>
        </motion.div>
        <div className="flex items-center space-x-4">
          <Link href="/docs">
            <motion.span 
              className="text-foreground/80 hover:text-foreground cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              Docs
            </motion.span>
          </Link>
          <ThemeToggle />
          <motion.a 
            href="https://marketplace.visualstudio.com/items?itemName=CodeGraph.dependency-visualizer" 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.05 }}
          >
            <button className="bg-primary text-primary-foreground py-2 px-6 rounded-md font-medium">
              Download
            </button>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
} 