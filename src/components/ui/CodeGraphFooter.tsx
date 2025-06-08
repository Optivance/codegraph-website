'use client';

import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import { Network } from 'lucide-react';

const CodeGraphFooter = () => {
  return (
    <div className="flex flex-col overflow-hidden w-full bg-background text-foreground">
      <footer className="flex flex-col items-center justify-center py-8 bg-transparent mt-40 w-full">
      
        <div className="max-w-[800px] text-center px-4">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
          Transform your code into visual graphs.
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500/80 to-purple-500/80">
  {' '}Understand at a glance.
</span>

          </h2>
        </div>

        {/* Call-to-action Button */}
        <a
         href="https://marketplace.visualstudio.com/items?itemName=CodeGraph.dependency-visualizer" 
         target="_blank" 
         rel="noopener noreferrer" 
        >
        <button className="bg-gradient-to-r from-blue-500/80 to-purple-500/80 hover:from-blue-500/90 hover:to-purple-500/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Get Started
        </button>
        </a>

        {/* Bottom Section */}
        <div className="bottom-div flex flex-wrap items-center justify-center gap-10 sm:gap-[100px] md:gap-[150px] lg:gap-[200px] mt-[20px] text-lg sm:text-2xl w-full max-w-screen-xl px-4">
        <span className="flex items-center gap-1 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500/80 to-purple-500/80">
         <Network size={30} className="text-blue-500" />
            CodeGraph
        </span>


          <div className="footer-nav flex gap-6 sm:gap-10 text-lg sm:text-xl pointer">
            <Link href="/">Home</Link>
            <Link href="/#features">Features</Link>
            <Link href="/docs">Docs</Link>
          </div>

          <div className="social-div flex gap-4 sm:gap-5">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://github.com/codegraph" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </footer>

      <hr className="w-[90%] sm:w-[900px] mx-auto mb-5 border-t border-border" />

      <div className="rights-bottom flex flex-col sm:flex-row items-center justify-between w-full max-w-[700px] mx-auto mb-10 text-center sm:text-left gap-4 px-4">
        <p className="text-md">© {new Date().getFullYear()} CodeGraph. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="text-md">Privacy Policy</a>
          <a href="#" className="text-md">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default CodeGraphFooter; 