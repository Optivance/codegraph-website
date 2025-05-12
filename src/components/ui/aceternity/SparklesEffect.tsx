'use client';
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/src/lib/utils';

interface SparkleType {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: {
    top: string;
    left: string;
    zIndex: number;
    transform: string;
  };
}

export const SparklesEffect = ({
  children,
  className,
  isActive = true,
  color = 'white',
  minSize = 10,
  maxSize = 20,
  particleCount = 15,
}: {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
  color?: string;
  minSize?: number;
  maxSize?: number;
  particleCount?: number;
}) => {
  const [sparkles, setSparkles] = useState<SparkleType[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = mediaQuery.matches;

    const handleMediaChange = () => {
      prefersReducedMotion.current = mediaQuery.matches;
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (!isActive || prefersReducedMotion.current) return;

    // Create initial sparkles
    const initialSparkles = Array.from({ length: particleCount }, () => createSparkle(
      {
        minSize,
        maxSize,
        color
      }
    ));
    setSparkles(initialSparkles);

    // Set up interval for updating sparkles
    const intervalId = setInterval(() => {
      const now = Date.now();
      setSparkles(prevSparkles => {
        // Remove sparkles older than 1000ms
        const filtered = prevSparkles.filter(sparkle => {
          const lifetime = now - sparkle.createdAt;
          return lifetime < 900;
        });
        
        // Add a new sparkle to replace one that just disappeared
        if (filtered.length < particleCount) {
          return [
            ...filtered,
            createSparkle({
              minSize,
              maxSize,
              color
            })
          ];
        }
        return filtered;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, [isActive, color, minSize, maxSize, particleCount]);

  const createSparkle = ({
    minSize,
    maxSize,
    color
  }: {
    minSize: number;
    maxSize: number;
    color: string;
  }): SparkleType => {
    const containerWidth = containerRef.current?.clientWidth || 100;
    const containerHeight = containerRef.current?.clientHeight || 100;
    
    const size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
    return {
      id: String(Math.random()),
      createdAt: Date.now(),
      color,
      size,
      style: {
        top: `${Math.random() * containerHeight}px`,
        left: `${Math.random() * containerWidth}px`,
        zIndex: 1,
        transform: `scale(0) rotate(${Math.random() * 360}deg)`,
      },
    };
  };

  return (
    <div className={cn("inline-block relative", className)} ref={containerRef}>
      {sparkles.map(sparkle => (
        <SparkleInstance 
          key={sparkle.id} 
          color={sparkle.color} 
          size={sparkle.size} 
          style={sparkle.style} 
        />
      ))}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const SparkleInstance = ({
  color,
  size,
  style,
}: {
  color: string;
  size: number;
  style: Record<string, unknown>;
}) => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    // Trigger animation shortly after mount
    const timeoutId = setTimeout(() => {
      setAnimation(true);
    }, 10);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute pointer-events-none transition-all duration-500 ${
        animation ? "scale-100 rotate-0 opacity-0" : "scale-0 opacity-100"
      }`}
      style={{
        ...style,
        transition: "transform 500ms cubic-bezier(0.36, 0.11, 0.89, 0.32), opacity 600ms ease",
      }}
    >
      <path
        d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
        fill={color}
      />
    </svg>
  );
}; 