'use client'
import React, { useState } from 'react'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import { cn } from '@/src/lib/utils'

export interface DocSection {
  id: string
  title: string
  subsections: string[]
}

interface DocsSidebarProps {
  sections: DocSection[]
  activeSectionId: string
  onSectionClick: (sectionId: string) => void
  onSubsectionClick: (sectionId: string, subsection: string) => void
}

export function DocsSidebar({
  sections,
  activeSectionId,
  onSectionClick,
  onSubsectionClick,
}: DocsSidebarProps) {
  const [isOpen, setIsOpen] = useState(true)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(
    sections.reduce((acc, section) => ({
      ...acc,
      [section.id]: section.id === activeSectionId,
    }), {})
  )

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
    onSectionClick(sectionId)
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='z-30'>
      {/* Mobile toggle button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-20 left-4 z-50 p-2 bg-gray-800 rounded-lg md:hidden"
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar backdrop - mobile only */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 bottom-0 left-0 z-30 w-64 backdrop-blur-sm border-r border-white/10 transition-transform duration-300 ease-in-out overflow-y-auto",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* This spacer pushes content below the navbar */}
        <div className="h-20 bg-black/30"></div>
        
        <div className="sticky top-0 backdrop-blur-md p-4 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Documentation
          </h2>
          <button 
            className="md:hidden p-1"
            onClick={() => setIsOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {sections.map((section) => (
            <div key={section.id} className="mb-2">
              <button
                onClick={() => toggleSection(section.id)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-md flex items-center justify-between transition-colors",
                  activeSectionId === section.id 
                    ? "bg-blue-500/20 text-white" 
                    : "text-white/70 hover:bg-gray-800/70 hover:text-white/90"
                )}
              >
                <span>{section.title}</span>
                {expandedSections[section.id] ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>
              
              {expandedSections[section.id] && section.subsections && (
                <div className="mt-1 ml-2 space-y-1 border-l border-gray-700/50 pl-2">
                  {section.subsections.map((subsection) => (
                    <button
                      key={subsection}
                      onClick={() => onSubsectionClick(section.id, subsection)}
                      className="w-full text-left px-3 py-1.5 text-sm text-white/60 hover:text-white/90 hover:bg-gray-800/30 rounded-md transition-colors"
                    >
                      {subsection}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </div>
  )
} 