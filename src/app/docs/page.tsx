'use client'
import React, { useState, useEffect } from 'react'

import { ChevronUp } from 'lucide-react'

import { DocsSidebar, type DocSection } from '@/src/components/ui/DocsSidebar'
import { 
  DocContent, 
  CodeBlock, 
  FeatureCard,
  DocPageTransition 
} from '@/src/components/ui/DocContent'

// Documentation sections data
const sections: DocSection[] = [
  { 
    id: 'introduction', 
    title: 'Introduction',
    subsections: ['Overview', 'Key Features', 'Benefits']
  },
  { 
    id: 'getting-started', 
    title: 'Getting Started',
    subsections: ['Installation', 'Quick Start', 'Prerequisites']
  },
  { 
    id: 'dependency-view', 
    title: 'Dependency View',
    subsections: ['Generation', 'Navigation', 'Customization']
  },
  { 
    id: 'graph-nodes', 
    title: 'Graph Features',
    subsections: ['Node Types', 'Interactions', 'Layouts']
  },
  { 
    id: 'usage-guide', 
    title: 'Usage Guide',
    subsections: ['Basic Usage', 'Advanced Features', 'Tips & Tricks']
  },
  { 
    id: 'configuration', 
    title: 'Configuration',
    subsections: ['Settings', 'Customization', 'Best Practices']
  },
  { 
    id: 'troubleshooting', 
    title: 'Troubleshooting',
    subsections: ['Common Issues', 'Solutions', 'Support']
  }
]

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('introduction')
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)

      // Update active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      })).filter(item => item.element)

      if (sectionElements.length) {
        const currentPosition = window.scrollY + 100

        // Find the section that is currently in view
        for (let i = sectionElements.length - 1; i >= 0; i--) {
          const { id, element } = sectionElements[i]
          if (element && element.offsetTop <= currentPosition) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubsectionClick = (sectionId: string, subsection: string) => {
    // Scroll to the section first
    scrollToSection(sectionId)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black text-white/80 flex flex-col pt-20">
      {/* Background gradient effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      {/* Sidebar */}
      <DocsSidebar 
        sections={sections} 
        activeSectionId={activeSection}
        onSectionClick={scrollToSection}
        onSubsectionClick={handleSubsectionClick}
      />

      {/* Main content area */}
      <div className="md:pl-64 w-full transition-all duration-300">
        <div className="max-w-4xl mx-auto px-6 md:px-8 pt-4 pb-32">
          <DocPageTransition>
            <div className="space-y-12">
              {/* Introduction Section */}
              <DocContent id="introduction" title="Introduction">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    CodeGraph is an advanced Visual Studio Code extension that revolutionizes how developers understand and navigate their codebase. By providing real-time visualization and analysis of code dependencies, it makes it easier to understand complex project structures and relationships.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <FeatureCard 
                      title="Visual Insights" 
                      icon={<span role="img" aria-label="magnifying glass">🔍</span>}
                      color="blue"
                    >
                      <p className="text-sm text-white/70">
                        Transform your code into interactive visual graphs for better understanding and navigation.
                      </p>
                    </FeatureCard>
                    
                    <FeatureCard 
                      title="Real-time Analysis" 
                      icon={<span role="img" aria-label="lightning">⚡</span>}
                      color="purple"
                    >
                      <p className="text-sm text-white/70">
                        Get instant feedback on code dependencies and relationships as you write code.
                      </p>
                    </FeatureCard>
                    
                    <FeatureCard 
                      title="Improved Productivity" 
                      icon={<span role="img" aria-label="rocket">🚀</span>}
                      color="green"
                    >
                      <p className="text-sm text-white/70">
                        Navigate complex codebases with ease and identify potential issues before they become problems.
                      </p>
                    </FeatureCard>
                    
                    <FeatureCard 
                      title="Team Collaboration" 
                      icon={<span role="img" aria-label="people">👥</span>}
                      color="blue"
                    >
                      <p className="text-sm text-white/70">
                        Share and explain code relationships with your team more effectively.
                      </p>
                    </FeatureCard>
                  </div>
                </div>
              </DocContent>

              {/* Getting Started Section */}
              <DocContent id="getting-started" title="Getting Started">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-blue-400">Quick Installation</h3>
                  <ol className="list-decimal list-inside space-y-4 ml-4 text-white/80">
                    <li>Open Visual Studio Code</li>
                    <li>Navigate to the Extensions view (Ctrl+Shift+X / Cmd+Shift+X)</li>
                    <li>Search for "CodeGraph" and click Install</li>
                    <li>Reload VS Code when prompted</li>
                  </ol>

                  <h3 className="text-xl font-semibold text-blue-400 mt-8">Prerequisites</h3>
                  <p className="text-white/80">
                    CodeGraph works with most programming languages and project types, but for optimal performance, ensure you have:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-white/80">
                    <li>Visual Studio Code v1.60 or higher</li>
                    <li>A structured project with clear file relationships</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-blue-400 mt-8">Configuration</h3>
                  <p className="text-white/80 mb-4">
                    You can customize CodeGraph by creating a configuration file in your project root:
                  </p>
                  <CodeBlock language="json">
{`{
  "ignoreDirs": ["node_modules", "dist"],
  "analysisModes": ["imports", "exports", "calls"],
  "refreshRate": "onSave"
}`}
                  </CodeBlock>
                </div>
              </DocContent>

              {/* Dependency View Section */}
              <DocContent id="dependency-view" title="Dependency View">
                <div className="space-y-6">
                  <p className="text-white/80">
                    The Dependency View is the core feature of CodeGraph, providing a visual representation of your code's dependency structure.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-blue-400">Generation</h3>
                  <p className="text-white/80">
                    CodeGraph automatically generates a dependency graph based on your code structure. You can trigger a generation manually by:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 ml-4 text-white/80">
                    <li>Opening the Command Palette (Ctrl+Shift+P / Cmd+Shift+P)</li>
                    <li>Typing "CodeGraph: Generate Dependency View"</li>
                    <li>Press Enter to start the analysis</li>
                  </ol>

                  <h3 className="text-xl font-semibold text-blue-400 mt-8">Navigation</h3>
                  <p className="text-white/80">
                    Navigate the graph using these controls:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-white/80">
                    <li>Zoom: Mouse wheel or pinch gesture</li>
                    <li>Pan: Click and drag on the background</li>
                    <li>Select a node: Click on any file node</li>
                    <li>View file: Double-click on a node</li>
                  </ul>
                </div>
              </DocContent>

              {/* Graph Features Section */}
              <DocContent id="graph-nodes" title="Graph Features">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-blue-400">Node Types</h3>
                  <p className="text-white/80">
                    CodeGraph visualizes different elements of your codebase as distinct node types:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-800/30 p-4 rounded-lg border border-blue-500/10">
                      <h4 className="text-blue-400 font-medium mb-2">File Nodes</h4>
                      <p className="text-sm text-white/70">Represent individual files in your project. Color-coded by file type.</p>
                    </div>
                    <div className="bg-gray-800/30 p-4 rounded-lg border border-purple-500/10">
                      <h4 className="text-purple-400 font-medium mb-2">Module Nodes</h4>
                      <p className="text-sm text-white/70">Represent importable modules or packages. Typically shown as larger nodes.</p>
                    </div>
                    <div className="bg-gray-800/30 p-4 rounded-lg border border-green-500/10">
                      <h4 className="text-green-400 font-medium mb-2">Function Nodes</h4>
                      <p className="text-sm text-white/70">Represent individual functions or methods when detailed analysis is enabled.</p>
                    </div>
                    <div className="bg-gray-800/30 p-4 rounded-lg border border-yellow-500/10">
                      <h4 className="text-yellow-400 font-medium mb-2">Connection Edges</h4>
                      <p className="text-sm text-white/70">Lines connecting nodes, indicating dependencies or relationships.</p>
                    </div>
                  </div>
                </div>
              </DocContent>

              {/* Usage Guide Section */}
              <DocContent id="usage-guide" title="Usage Guide">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-blue-400">Basic Usage</h3>
                  <p className="text-white/80">
                    After installation, CodeGraph will automatically analyze your project and create a dependency graph. 
                    To view the graph:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 ml-4 text-white/80">
                    <li>Click the CodeGraph icon in the activity bar</li>
                    <li>Select "Open Dependency View" from the context menu</li>
                  </ol>

                  <h3 className="text-xl font-semibold text-blue-400 mt-8">Advanced Features</h3>
                  <p className="text-white/80 mb-4">
                    CodeGraph offers several advanced features for power users:
                  </p>
                  <CodeBlock language="javascript">
{`// Example: Custom analysis configuration
{
  "depth": 3,              // Maximum depth of dependency traversal
  "includeExternals": true, // Include external dependencies
  "focusFiles": [          // Files to focus the analysis on
    "src/main.ts",
    "src/components/**/*.tsx"
  ]
}`}
                  </CodeBlock>
                </div>
              </DocContent>

              {/* Configuration Section */}
              <DocContent id="configuration" title="Configuration">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-blue-400">Settings</h3>
                  <p className="text-white/80">
                    CodeGraph can be configured through the VS Code settings panel or by creating a 
                    <code className="mx-1 px-1 py-0.5 bg-gray-800 rounded text-sm">.codegraph.json</code> 
                    file in your project root.
                  </p>

                  <h3 className="text-xl font-semibold text-blue-400 mt-8">Customization Options</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-white/80 mt-2">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="py-2 px-4 text-left text-blue-400">Option</th>
                          <th className="py-2 px-4 text-left text-blue-400">Type</th>
                          <th className="py-2 px-4 text-left text-blue-400">Default</th>
                          <th className="py-2 px-4 text-left text-blue-400">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-800">
                          <td className="py-2 px-4">autoRefresh</td>
                          <td className="py-2 px-4">boolean</td>
                          <td className="py-2 px-4">true</td>
                          <td className="py-2 px-4">Automatically refresh the graph when files change</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-2 px-4">layout</td>
                          <td className="py-2 px-4">string</td>
                          <td className="py-2 px-4">"force"</td>
                          <td className="py-2 px-4">Graph layout algorithm (force, tree, radial)</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-2 px-4">depth</td>
                          <td className="py-2 px-4">number</td>
                          <td className="py-2 px-4">5</td>
                          <td className="py-2 px-4">Maximum dependency depth to display</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </DocContent>

              {/* Troubleshooting Section */}
              <DocContent id="troubleshooting" title="Troubleshooting">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-blue-400">Common Issues</h3>
                  
                  <div className="bg-gray-800/30 p-5 rounded-lg border border-yellow-500/20 mb-6">
                    <h4 className="text-lg font-medium text-yellow-400 mb-2">Missing Dependencies</h4>
                    <p className="text-white/80 mb-3">
                      If some dependencies are not showing in the graph, check that they are properly imported in your code.
                    </p>
                    <div className="text-sm text-white/60">
                      <p className="font-medium">Solution:</p>
                      <ol className="list-decimal list-inside ml-4 mt-1">
                        <li>Verify import statements are correct</li>
                        <li>Check that the files exist in the expected locations</li>
                        <li>Try regenerating the dependency graph</li>
                      </ol>
                    </div>
                  </div>

                  <div className="bg-gray-800/30 p-5 rounded-lg border border-yellow-500/20">
                    <h4 className="text-lg font-medium text-yellow-400 mb-2">Performance Issues</h4>
                    <p className="text-white/80 mb-3">
                      Large projects may experience performance issues when generating or displaying the dependency graph.
                    </p>
                    <div className="text-sm text-white/60">
                      <p className="font-medium">Solution:</p>
                      <ol className="list-decimal list-inside ml-4 mt-1">
                        <li>Limit the analysis depth in settings</li>
                        <li>Exclude large library directories</li>
                        <li>Focus the analysis on specific directories</li>
                      </ol>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-blue-400 mt-8">Support</h3>
                  <p className="text-white/80">
                    If you encounter issues not covered in the documentation, you can:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-white/80">
                    <li>Check the <a href="#" className="text-blue-400 underline">GitHub repository</a> for known issues</li>
                    <li>Join our <a href="#" className="text-blue-400 underline">Discord community</a> for help</li>
                    <li>Contact support at <a href="mailto:support@codegraph.dev" className="text-blue-400 underline">support@codegraph.dev</a></li>
                  </ul>
                </div>
              </DocContent>
            </div>
          </DocPageTransition>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  )
}
