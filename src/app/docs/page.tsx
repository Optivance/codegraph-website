'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
        initial="hidden"
        animate="visible"
      />

      {/* Centered Content */}
      <motion.div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Documentation
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Coming Soon
          </span>
        </motion.h1>
      </motion.div>
    </div>
  )
}
