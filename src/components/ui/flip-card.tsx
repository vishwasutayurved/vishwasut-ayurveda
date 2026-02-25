'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

export const FlipCard: React.FC<FlipCardProps> = ({ className, frontContent, backContent, ...props }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={cn('flip-card', { flipped: isFlipped }, className)}
      onClick={handleClick}
      {...props}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {frontContent}
        </div>
        <div className="flip-card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
};
