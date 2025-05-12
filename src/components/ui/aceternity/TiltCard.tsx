'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/src/lib/utils';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  glareOpacity?: number;
  borderRadius?: string;
  backgroundImage?: string;
  backgroundColor?: string;
}

export function TiltCard({
  children,
  className = '',
  tiltAmount = 10,
  glareOpacity = 0.2,
  borderRadius = '1rem',
  backgroundImage,
  backgroundColor = 'transparent',
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate the mouse position relative to the card center
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    // Calculate the amount of rotation
    const rotateY = mouseX * tiltAmount;
    const rotateX = -mouseY * tiltAmount;
    
    setRotateX(rotateX);
    setRotateY(rotateY);
    setMouseX(mouseX * width);
    setMouseY(mouseY * height);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const style: React.CSSProperties = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundColor,
    borderRadius,
    transformStyle: 'preserve-3d',
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn('relative overflow-hidden', className)}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30,
        mass: 1,
      }}
    >
      {/* Tilt glare effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,${glareOpacity}), transparent 50%)`,
          borderRadius,
          zIndex: 3,
        }}
      />
      
      {/* Content container with 3D transform */}
      <div className="relative z-2 transform-gpu translate-z-0">
        {children}
      </div>
    </motion.div>
  );
} 