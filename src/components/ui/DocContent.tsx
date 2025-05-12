'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/src/lib/utils'

interface DocContentProps {
  id: string
  title: string
  children: React.ReactNode
}

export function DocContent({ id, title, children }: DocContentProps) {
  return (
    <div id={id} className="mb-12 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white/90 flex items-center group">
        {title}
        <a 
          href={`#${id}`} 
          className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label={`Link to ${title} section`}
        >
          <span className="text-blue-400 text-sm">#</span>
        </a>
      </h2>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

export function CodeBlock({ 
  children, 
  language = 'json' 
}: { 
  children: string; 
  language?: string 
}) {
  return (
    <div className="relative group">
      <pre className="bg-gray-800/50 p-4 rounded-lg overflow-x-auto">
        <code className={`text-sm text-gray-300 language-${language}`}>
          {children}
        </code>
      </pre>
      <button 
        className="absolute top-2 right-2 bg-gray-700/50 p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => navigator.clipboard.writeText(children)}
        aria-label="Copy code"
      >
        <span className="text-xs text-gray-400">Copy</span>
      </button>
    </div>
  )
}

export function FeatureCard({ 
  title, 
  children, 
  color = "blue", 
  icon 
}: { 
  title: string
  children: React.ReactNode
  color?: "blue" | "purple" | "green"
  icon?: React.ReactNode
}) {
  const colorClasses = {
    blue: "border-blue-500/10 hover:border-blue-500/30 text-blue-400",
    purple: "border-purple-500/10 hover:border-purple-500/30 text-purple-400",
    green: "border-green-500/10 hover:border-green-500/30 text-green-400"
  }

  return (
    <div className={cn(
      "bg-gray-800/30 p-6 rounded-lg border transition-colors", 
      colorClasses[color]
    )}>
      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      {children}
    </div>
  )
}

export function DocPageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
} 