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
        className="fixed top-20 left-4 z-50 p-2 bg-background/80 backdrop-blur-sm rounded-lg border border-border md:hidden"
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar backdrop - mobile only */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 bottom-0 left-0 z-30 w-64 backdrop-blur-sm border-r border-border transition-transform duration-300 ease-in-out overflow-y-auto bg-background/50",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* This spacer pushes content below the navbar */}
        <div className="h-20"></div>
        
        <div className="sticky top-0 backdrop-blur-md p-4 border-b border-border flex items-center justify-between bg-background/80">
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
                    ? "bg-blue-500/20 text-foreground" 
                    : "text-foreground/70 hover:bg-background/70 hover:text-foreground/90"
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
                <div className="mt-1 ml-2 space-y-1 border-l border-border pl-2">
                  {section.subsections.map((subsection) => (
                    <button
                      key={subsection}
                      onClick={() => onSubsectionClick(section.id, subsection)}
                      className="w-full text-left px-3 py-1.5 text-sm text-foreground/60 hover:text-foreground/90 hover:bg-background/70 rounded-md transition-colors"
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