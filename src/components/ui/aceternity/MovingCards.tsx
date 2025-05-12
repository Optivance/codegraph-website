'use client';
import React, { useRef, useEffect, useState } from 'react';


interface MovingCardProps {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}

export function MovingCards({
  items,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
  className = '',
}: MovingCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards');
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse');
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`scroller relative overflow-hidden ${className}`}
      style={{
        mask: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)',
        WebkitMask: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)',
      }}
    >
      <div
        ref={scrollerRef}
        className={`scroller__inner flex ${
          start ? 'animate-scroll' : ''
        } ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-lg p-6 flex-shrink-0 w-[350px] mr-8"
          >
            <div className="flex flex-col h-full">
              <div className="flex-grow mb-4">
                <p className="text-white/80 italic">&ldquo;{item.quote}&rdquo;</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs text-white/60">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 