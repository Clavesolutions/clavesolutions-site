import { useEffect, useState, useRef } from "react";
import FloatingIcon from "./FloatingIcon";
import DualRotatingText from "./DualRotatingText";
import claveLogo from "figma:asset/854450d11d24ba15fadcf1cf56a5a1632be9248b.png";

interface IconConfig {
  Icon: React.ComponentType<{ className?: string }>;
  color: string;
  name: string;
}

interface ActiveIcon {
  iconIndex: number;
  spawnTime: number;
  key: number;
}

interface IndustryFloatingHeroProps {
  icons: IconConfig[];
  heroH1: string | React.ReactNode;
  heroSubhead: string;
  primaryCTA: string;
  secondaryCTA?: string;
  onPrimaryCTAClick: () => void;
  onSecondaryCTAClick?: () => void;
  // Optional dual rotation props
  audienceLabel?: string;
  audiences?: string[];
  automationLabel?: string;
  automations?: string[];
}

export default function IndustryFloatingHero({
  icons,
  heroH1,
  heroSubhead,
  primaryCTA,
  secondaryCTA,
  onPrimaryCTAClick,
  onSecondaryCTAClick,
  audienceLabel,
  audiences,
  automationLabel,
  automations,
}: IndustryFloatingHeroProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile origins (6 left + 6 right) - REDUCED BY 20% to match main hero
  const mobileOrigins = [
    // Left Edge (6 paths: 0-5)
    { x: -144, y: -240 },
    { x: -144, y: -144 },
    { x: -144, y: -48 },
    { x: -144, y: 48 },
    { x: -144, y: 144 },
    { x: -144, y: 240 },
    // Right Edge (6 paths: 6-11)
    { x: 144, y: -240 },
    { x: 144, y: -144 },
    { x: 144, y: -48 },
    { x: 144, y: 48 },
    { x: 144, y: 144 },
    { x: 144, y: 240 },
  ];

  // Desktop origins (6 left + 6 right, wider spacing) - REDUCED BY 20% to match main hero
  const desktopOrigins = [
    // Left Edge (6 paths: 0-5)
    { x: -400, y: -240 },
    { x: -400, y: -144 },
    { x: -400, y: -48 },
    { x: -400, y: 48 },
    { x: -400, y: 144 },
    { x: -400, y: 240 },
    // Right Edge (6 paths: 6-11)
    { x: 400, y: -240 },
    { x: 400, y: -144 },
    { x: 400, y: -48 },
    { x: 400, y: 48 },
    { x: 400, y: 144 },
    { x: 400, y: 240 },
  ];

  const origins = isMobile ? mobileOrigins : desktopOrigins;

  // ASSEMBLY LINE STATE
  const [activeIcons, setActiveIcons] = useState<Map<number, ActiveIcon>>(new Map());
  const nextIconIndexRef = useRef(0);
  const spawnCountRef = useRef(0);
  const keyCounterRef = useRef(0);

  const ICON_DURATION = 13000; // 10s travel + 3s respawn delay

  // ASSEMBLY LINE SPAWN CONTROLLER
  useEffect(() => {
    const spawnInterval = setInterval(() => {
      const currentTime = Date.now();
      
      setActiveIcons(prev => {
        // Determine if this spawn should be LEFT (0-5) or RIGHT (6-11)
        const isLeftTurn = spawnCountRef.current % 2 === 0;
        const pathRange = isLeftTurn ? [0, 1, 2, 3, 4, 5] : [6, 7, 8, 9, 10, 11];
        
        // Find available paths on this side
        const availablePaths = pathRange.filter(pathIndex => !prev.has(pathIndex));
        
        // ONLY spawn if there's an available path
        if (availablePaths.length === 0) {
          return prev;
        }
        
        // Pick random available path
        const chosenPath = availablePaths[Math.floor(Math.random() * availablePaths.length)];
        
        // Create new map with spawned icon
        const newMap = new Map(prev);
        newMap.set(chosenPath, {
          iconIndex: nextIconIndexRef.current,
          spawnTime: currentTime,
          key: keyCounterRef.current++
        });
        
        // Update counters
        nextIconIndexRef.current = (nextIconIndexRef.current + 1) % icons.length;
        spawnCountRef.current++;
        
        return newMap;
      });
      
    }, 1000); // Spawn every 1 second

    return () => clearInterval(spawnInterval);
  }, [icons.length]);

  // Callback when icon completes journey
  const handleIconComplete = (pathIndex: number) => {
    setActiveIcons(prev => {
      const newMap = new Map(prev);
      newMap.delete(pathIndex);
      return newMap;
    });
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden pt-8 pb-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:72px_72px] z-0" />

      {/* Centered yellow glow orb behind center orb - REDUCED BY 20% */}
      <div className="absolute top-[calc(58%+10px)] md:top-[calc(55%+10px)] left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-52 md:h-52 bg-yellow-500/20 rounded-full blur-3xl animate-pulse z-0" style={{ animationDuration: '3s' }} />

      {/* Floating Icons - Assembly Line */}
      {Array.from(activeIcons.entries()).map(([pathIndex, activeIcon]) => {
        const icon = icons[activeIcon.iconIndex];
        
        return (
          <FloatingIcon
            key={`${pathIndex}-${activeIcon.key}`}
            Icon={icon.Icon}
            iconColor={icon.color}
            origin={origins[pathIndex]}
            pathIndex={pathIndex}
            onComplete={handleIconComplete}
          />
        );
      })}

      {/* Central Orb with Clave Solutions Logo - z-10 - REDUCED BY 35% */}
      <div className="absolute top-[calc(58%+10px)] md:top-[calc(55%+10px)] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          {/* Pulsing cyan glow rings */}
          <div className="absolute inset-0 -m-5 sm:-m-4 md:-m-6 rounded-full bg-cyan-400/30 blur-xl animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-0 -m-3 sm:-m-3 md:-m-5 rounded-full bg-cyan-400/20 blur-lg animate-pulse" style={{ animationDuration: '3s' }} />
          
          {/* Main orb with golden key logo - REDUCED BY 35% */}
          <div className="relative w-40 h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 sm:border-2 md:border-3 border-cyan-400/50 shadow-[0_0_50px_rgba(6,182,212,0.6)] md:shadow-[0_0_50px_rgba(6,182,212,0.6)] flex items-center justify-center backdrop-blur-sm">
            {/* Golden Key Logo - PNG Image - SCALED DOWN BY 35% */}
            <img
              src={claveLogo}
              alt="Clave Solutions Logo" 
              className="w-[384px] h-[384px] sm:w-[640px] sm:h-[640px] md:w-[800px] md:h-[800px] relative z-10 object-contain"
            />

            {/* Animated cyan ring */}
            <div className="absolute inset-0 rounded-full border-2 sm:border-2 animate-spin-slow opacity-50" style={{ animationDuration: '8s' }} />
          </div>
        </div>
      </div>

      {/* Hero Content - ABSOLUTE POSITIONING to match main hero */}
      <div className="relative z-30 min-h-screen">
        {/* TOP: Headline + Description - ABSOLUTE POSITIONED */}
        <div className="absolute top-20 sm:top-24 md:top-20 left-0 right-0 flex flex-col items-center px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 sm:space-y-3 md:space-y-4">
              {/* Main headline - SLIGHTLY LARGER ON MOBILE for aging eyes - WITH GRADIENT LIKE HOMEPAGE */}
              <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-yellow-400 leading-[1.15] tracking-tight animate-fade-in max-w-xs sm:max-w-none mx-auto">
                {heroH1}
              </h1>
              
              {/* Clean subheading - SLIGHTLY LARGER ON MOBILE */}
              <p className="text-base sm:text-base md:text-lg lg:text-xl text-slate-100 leading-relaxed animate-fade-in-delay max-w-3xl mx-auto">
                {heroSubhead}
              </p>

              {/* Dual rotating text (optional) - ultra-minimal container */}
              {audienceLabel && audiences && automationLabel && automations && (
                <div className="animate-fade-in-delay">
                  <DualRotatingText
                    audienceLabel={audienceLabel}
                    audiences={audiences}
                    automationLabel={automationLabel}
                    automations={automations}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* BOTTOM: Buttons - ABSOLUTE POSITIONED AT BOTTOM */}
        <div className="absolute bottom-12 sm:bottom-12 md:bottom-16 left-0 right-0 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center px-4 sm:px-6 animate-fade-in-delay-2 mb-6 sm:mb-0">
          <button 
            className="px-5 sm:px-7 md:px-9 py-2.5 sm:py-3 md:py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:shadow-[0_0_50px_rgba(6,182,212,0.7)] transition-all duration-300 text-sm sm:text-base md:text-base font-semibold w-full sm:w-auto" 
            onClick={onPrimaryCTAClick}
          >
            {primaryCTA}
          </button>
          {secondaryCTA && onSecondaryCTAClick && (
            <button 
              className="px-5 sm:px-7 md:px-9 py-2.5 sm:py-3 md:py-3.5 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 rounded-full backdrop-blur-sm transition-all duration-300 text-sm sm:text-base md:text-base font-semibold w-full sm:w-auto" 
              onClick={onSecondaryCTAClick}
            >
              {secondaryCTA}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}