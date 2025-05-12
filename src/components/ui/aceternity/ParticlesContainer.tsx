'use client';
import React, { useEffect, useState } from 'react';
import { loadSlim } from 'tsparticles-slim';

interface ParticlesContainerProps {
  className?: string;
  particleColor?: string;
  linkColor?: string;
  quantity?: number;
}

export function ParticlesContainer({
  className = '',
  particleColor = '#ffffff',
  linkColor = '#ffffff',
  quantity = 50,
}: ParticlesContainerProps) {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      const initParticles = async () => {
        try {
          await loadSlim(window.tsParticles);
          
          await window.tsParticles.load("tsparticles", {
            fullScreen: { enable: false },
            background: {
              color: {
                value: 'transparent',
              },
            },
            fpsLimit: 60,
            particles: {
              color: {
                value: particleColor,
              },
              links: {
                color: linkColor,
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 0.6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: quantity,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          });
          
          setInitialized(true);
        } catch (error) {
          console.error("Error initializing particles:", error);
        }
      };

      initParticles();
    }
  }, [initialized, linkColor, particleColor, quantity]);

  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      <div id="tsparticles" className="w-full h-full absolute inset-0"></div>
    </div>
  );
} 