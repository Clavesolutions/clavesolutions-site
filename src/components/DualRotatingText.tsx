import { useState, useEffect } from "react";

interface DualRotatingTextProps {
  audienceLabel: string;
  audiences: string[];
  automationLabel: string;
  automations: string[];
  intervalMs?: number;
}

export default function DualRotatingText({ 
  audienceLabel,
  audiences,
  automationLabel,
  automations,
  intervalMs = 2500 
}: DualRotatingTextProps) {
  const [audienceIndex, setAudienceIndex] = useState(0);
  const [automationIndex, setAutomationIndex] = useState(0);
  const [isAudienceTransitioning, setIsAudienceTransitioning] = useState(false);
  const [isAutomationTransitioning, setIsAutomationTransitioning] = useState(false);

  // Audience rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAudienceTransitioning(true);
      
      setTimeout(() => {
        setAudienceIndex((prev) => (prev + 1) % audiences.length);
        setIsAudienceTransitioning(false);
      }, 300);
      
    }, intervalMs);

    return () => clearInterval(interval);
  }, [audiences.length, intervalMs]);

  // Automation rotation (offset by half the interval to stagger animations)
  useEffect(() => {
    const offset = setTimeout(() => {
      const interval = setInterval(() => {
        setIsAutomationTransitioning(true);
        
        setTimeout(() => {
          setAutomationIndex((prev) => (prev + 1) % automations.length);
          setIsAutomationTransitioning(false);
        }, 300);
        
      }, intervalMs);

      return () => clearInterval(interval);
    }, intervalMs / 2); // Start automation rotation halfway through

    return () => clearTimeout(offset);
  }, [automations.length, intervalMs]);

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* "Built for [rotating]" line */}
      <div className="backdrop-blur-md bg-slate-900/70 rounded-lg sm:rounded-xl px-4 py-2 sm:px-6 sm:py-3 inline-block border border-slate-700/30 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
        <div className="flex flex-wrap items-center justify-center gap-2 text-base sm:text-lg md:text-xl text-slate-200">
          <span>{audienceLabel}</span>
          <div className="inline-block min-w-[160px] sm:min-w-[180px]">
            <div 
              className={`transition-all duration-500 ease-in-out ${
                isAudienceTransitioning 
                  ? 'opacity-0 translate-y-2' 
                  : 'opacity-100 translate-y-0'
              }`}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-400 font-semibold">
                {audiences[audienceIndex]}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* "We automate: [rotating]" line */}
      <div className="backdrop-blur-md bg-slate-900/60 rounded-lg px-4 py-2 sm:px-5 sm:py-2.5 inline-block border border-slate-700/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base text-slate-300">
          <span>{automationLabel}</span>
          <div className="inline-block min-w-[180px] sm:min-w-[220px]">
            <div 
              className={`transition-all duration-500 ease-in-out ${
                isAutomationTransitioning 
                  ? 'opacity-0 translate-y-2' 
                  : 'opacity-100 translate-y-0'
              }`}
            >
              <span className="text-cyan-300 font-medium">
                {automations[automationIndex]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
