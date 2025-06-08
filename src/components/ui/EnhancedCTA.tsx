'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, GitGraph } from 'lucide-react';

export function EnhancedCTA() {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-500/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background/40 backdrop-blur-lg rounded-3xl border border-border p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.div 
                className="flex items-center gap-2 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl">
                  <GitGraph className="h-6 w-6 text-white" />
                </div>
                <span className="text-lg font-medium text-foreground/80">CodeGraph</span>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">simplify</span> your code dependencies?
              </motion.h2>
              
              <motion.p
                className="text-lg text-foreground/70 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Get started with CodeGraph today and transform how you understand and navigate your codebase. Visualize dependencies, identify issues, and improve your development workflow.
              </motion.p>
              
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="https://marketplace.visualstudio.com/items?itemName=CodeGraph.dependency-visualizer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium flex items-center gap-2">
                    Download Now
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.a>
                
                <motion.a
                  href="/docs"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="px-6 py-3 border border-border rounded-lg font-medium">
                    Read Documentation
                  </button>
                </motion.a>
              </motion.div>
            </div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-background/20 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs text-foreground/60 ml-2">dependency-graph.ts</div>
                </div>
                
                <pre className="text-xs md:text-sm overflow-x-auto p-4 bg-background/30 rounded-lg">
                  <code className="text-foreground/80">
                    <span className="text-blue-400">import</span> <span className="text-foreground">{'{'} Graph {'}'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">'./graph'</span>;<br />
                    <br />
                    <span className="text-purple-400">class</span> <span className="text-yellow-400">DependencyGraph</span> <span className="text-foreground">{'{'}</span><br />
                    {'  '}<span className="text-blue-400">constructor</span><span className="text-foreground">() {'{'}</span><br />
                    {'    '}<span className="text-foreground">this.graph = </span><span className="text-blue-400">new</span> <span className="text-yellow-400">Graph</span><span className="text-foreground">();</span><br />
                    {'    '}<span className="text-foreground">this.nodes = </span><span className="text-blue-400">new</span> <span className="text-yellow-400">Map</span><span className="text-foreground">();</span><br />
                    {'  '}<span className="text-foreground">{'}'}</span><br />
                    <br />
                    {'  '}<span className="text-blue-400">addDependency</span><span className="text-foreground">(source, target) {'{'}</span><br />
                    {'    '}<span className="text-foreground">this.graph.</span><span className="text-blue-400">addEdge</span><span className="text-foreground">(source, target);</span><br />
                    {'  '}<span className="text-foreground">{'}'}</span><br />
                    <br />
                    {'  '}<span className="text-blue-400">visualize</span><span className="text-foreground">() {'{'}</span><br />
                    {'    '}<span className="text-purple-400">return</span> <span className="text-foreground">this.graph.</span><span className="text-blue-400">render</span><span className="text-foreground">();</span><br />
                    {'  '}<span className="text-foreground">{'}'}</span><br />
                    <span className="text-foreground">{'}'}</span>
                  </code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 