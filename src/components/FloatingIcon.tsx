import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface FloatingIconProps {
  Icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  origin: { x: number; y: number };
  pathIndex: number;
  onComplete: (pathIndex: number) => void;
  staggerDelay?: number; // NEW: Stagger animation start
}

export default function FloatingIcon({ 
  Icon, 
  iconColor, 
  origin,
  pathIndex,
  onComplete,
  staggerDelay = 0
}: FloatingIconProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const startX = origin.x;
  const startY = origin.y;
  
  // Travel duration: 16s on mobile (30% slower than before), 11.5s on desktop
  const travelDuration = isMobile ? 16 : 11.5;
  
  // Respawn delay: 3s after dissolving
  const respawnDelay = 3;
  
  // ALL icons converge to EXACT CENTER (0, 0)
  const convergenceX = 0;
  const convergenceY = 0;
  
  // MOBILE ONLY: Custom easing curve for progressive "black hole" acceleration effect
  // Desktop keeps linear motion for cleaner professional look
  const easingCurve = isMobile ? [0.2, 0.0, 0.8, 1.0] : "linear";

  useEffect(() => {
    // After traveling + respawn delay, notify parent
    const timeout = setTimeout(() => {
      onComplete(pathIndex);
    }, (travelDuration + respawnDelay) * 1000);

    return () => clearTimeout(timeout);
  }, [travelDuration, respawnDelay, pathIndex, onComplete]);

  return (
    <motion.div
      className="absolute left-1/2 top-[calc(58%+10px)] md:top-[calc(55%+10px)] -translate-y-1/2 z-[5]"
      initial={{ 
        x: startX,
        y: startY,
        opacity: 0,
        scale: 0.8
      }}
      animate={{ 
        x: convergenceX,
        y: convergenceY,
        opacity: [0, 1, 1, 1, 1, 1, 0],
        scale: [0.8, 1, 1, 1, 1, 0.6, 0.3],
      }}
      transition={{
        duration: travelDuration,
        // Position (x, y) gets the black hole acceleration curve on mobile
        x: { 
          duration: travelDuration,
          ease: easingCurve
        },
        y: { 
          duration: travelDuration,
          ease: easingCurve
        },
        // Opacity and scale keep their timed keyframes
        opacity: {
          duration: travelDuration,
          times: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1]
        },
        scale: {
          duration: travelDuration,
          times: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1]
        },
        // NEW: Add stagger delay to animation start
        delay: staggerDelay
      }}
    >
      {/* Icon card with premium effects - Reduced size by ~15% (64px -> 54px) */}
      <motion.div 
        className={`flex h-[54px] w-[54px] items-center justify-center rounded-xl ${iconColor} backdrop-blur-sm shadow-[0_0_30px_rgba(6,182,212,0.3)] border border-cyan-400/30 relative`}
        animate={{
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          rotate: {
            duration: travelDuration,
            ease: "linear",
          }
        }}
      >
        {/* Subtle inner glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
        
        {/* Icon size: reduced proportionally to ~8.5 (from 10) */}
        <Icon className="h-[34px] w-[34px] relative z-10" />
      </motion.div>
    </motion.div>
  );
}