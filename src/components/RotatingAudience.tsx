import { useState, useEffect } from "react";

interface RotatingAudienceProps {
  audiences: string[];
  intervalMs?: number;
}

export default function RotatingAudience({ 
  audiences, 
  intervalMs = 4000 // Slowed from 2500ms to 4000ms (4 seconds)
}: RotatingAudienceProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % audiences.length);
        setIsTransitioning(false);
      }, 300); // Half of transition duration
      
    }, intervalMs);

    return () => clearInterval(interval);
  }, [audiences.length, intervalMs]);

  return (
    <span className="inline-block min-w-[140px] sm:min-w-[180px] md:min-w-[220px]" style={{ 
      minHeight: '1.5em' // Lock height to prevent jitter
    }}>
      <span 
        className={`transition-all duration-500 ease-in-out ${
          isTransitioning 
            ? 'opacity-0 translate-y-2' 
            : 'opacity-100 translate-y-0'
        }`}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-400 font-semibold">
          {audiences[currentIndex]}
        </span>
      </span>
    </span>
  );
}