'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type InfiniteMovingCardsProps = {
  images: {
    src: string;
    alt: string;
  }[];
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
};

export const InfiniteMovingCards = ({
  images,
  direction = 'left',
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [start, setStart] = useState(false);

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
      containerRef.current.style.setProperty('--animation-duration', '120s');
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        );
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn('scroller relative z-20 overflow-hidden', className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {images.map((img) => (
          <li key={img.src}>
            <Image
              src={`https://www.screenly.io/${img.src}`}
              alt={img.alt}
              width="222"
              height="93"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
