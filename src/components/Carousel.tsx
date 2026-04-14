import { useRef, useEffect, useState } from 'react';

interface CarouselProps {
  items: React.ReactNode[];
  autoScrollInterval?: number;
}

export function Carousel({ items, autoScrollInterval = 4000 }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto Scroll for items to reset back to first item when it reaches the end
  useEffect(() => {
    if (isPaused || items.length <= 1) return;

    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;

      const { scrollLeft, scrollWidth, offsetWidth } = container;

      // Check if it's on the last item
      const isAtEnd = Math.ceil(scrollLeft + offsetWidth) >= scrollWidth - 20;

      if (isAtEnd) {

        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {

        const firstItem = container.children[0] as HTMLElement;
        const itemWidth = firstItem?.offsetWidth || offsetWidth;
        const gap = 16; // Equivalent of gap-4 (1rem / 16px)
        
        container.scrollBy({ left: itemWidth + gap, behavior: 'smooth' });
      }
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [isPaused, items.length, autoScrollInterval]);

  return (
    <div 
      className="relative group w-full h-full flex flex-col"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}

      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      onTouchCancel={() => setIsPaused(false)}
    >
<div 
  ref={scrollRef}
  className="flex flex-1 overflow-x-auto gap-6 snap-x snap-mandatory px-6 pb-4 custom-scrollbar items-center
  mask-x-from-95% mask-x-to-100%
  ">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="w-[85%] xl:w-full h-full shrink-0 snap-center"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}