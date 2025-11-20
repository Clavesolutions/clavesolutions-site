import { useEffect, useState, useRef } from "react";
import FloatingIcon from "./FloatingIcon";
import RotatingAudience from "./RotatingAudience";
import ClioIcon from "./icons/ClioIcon";
import Microsoft365Icon from "./icons/Microsoft365Icon";
import GmailIcon from "./icons/GmailIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import AdobeIcon from "./icons/AdobeIcon";
import GoogleDocsIcon from "./icons/GoogleDocsIcon";
import ExcelIcon from "./icons/ExcelIcon";
import SlackIcon from "./icons/SlackIcon";
import SAPIcon from "./icons/SAPIcon";
import QuickBooksIcon from "./icons/QuickBooksIcon";
import HubSpotIcon from "./icons/HubSpotIcon";
import ChatGPTIcon from "./icons/ChatGPTIcon";
import EpicorIcon from "./icons/EpicorIcon";
import ProcoreIcon from "./icons/ProcoreIcon";
import SalesforceIcon from "./icons/SalesforceIcon";
import XeroIcon from "./icons/XeroIcon";
import SageIcon from "./icons/SageIcon";
import ViewpointIcon from "./icons/ViewpointIcon";
import ShopifyIcon from "./icons/ShopifyIcon";
import AmazonIcon from "./icons/AmazonIcon";
import claveLogo from "figma:asset/854450d11d24ba15fadcf1cf56a5a1632be9248b.png";

interface IconConfig {
  Icon: React.ComponentType<{ className?: string }>;
  color: string;
  name: string;
}

interface ActiveIcon {
  iconIndex: number;
  spawnTime: number;
  key: number; // Unique key for React rendering
}

interface FloatingHeroProps {
  onBookAuditClick: () => void;
}

export default function FloatingHero({ onBookAuditClick }: FloatingHeroProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 12 DEDICATED LANES - Mobile origins (6 left + 6 right) - REDUCED BY 20%
  const mobileOrigins = [
    // Left Edge (6 paths: 0-5)
    { x: -144, y: -240 },   // 0. Left-top
    { x: -144, y: -144 },   // 1. Left-high
    { x: -144, y: -48 },    // 2. Left-mid-high
    { x: -144, y: 48 },     // 3. Left-mid-low
    { x: -144, y: 144 },    // 4. Left-low
    { x: -144, y: 240 },    // 5. Left-bottom
    // Right Edge (6 paths: 6-11)
    { x: 144, y: -240 },    // 6. Right-top
    { x: 144, y: -144 },    // 7. Right-high
    { x: 144, y: -48 },     // 8. Right-mid-high
    { x: 144, y: 48 },      // 9. Right-mid-low
    { x: 144, y: 144 },     // 10. Right-low
    { x: 144, y: 240 },     // 11. Right-bottom
  ];

  // 12 DEDICATED LANES - Desktop origins (6 left + 6 right, wider spacing) - REDUCED BY 20%
  const desktopOrigins = [
    // Left Edge (6 paths: 0-5)
    { x: -400, y: -240 },   // 0. Left-top
    { x: -400, y: -144 },   // 1. Left-high
    { x: -400, y: -48 },    // 2. Left-mid-high
    { x: -400, y: 48 },     // 3. Left-mid-low
    { x: -400, y: 144 },    // 4. Left-low
    { x: -400, y: 240 },    // 5. Left-bottom
    // Right Edge (6 paths: 6-11)
    { x: 400, y: -240 },    // 6. Right-top
    { x: 400, y: -144 },    // 7. Right-high
    { x: 400, y: -48 },     // 8. Right-mid-high
    { x: 400, y: 48 },      // 9. Right-mid-low
    { x: 400, y: 144 },     // 10. Right-low
    { x: 400, y: 240 },     // 11. Right-bottom
  ];

  const origins = isMobile ? mobileOrigins : desktopOrigins;

  // ALL 24 BUSINESS SOFTWARE ICONS (Legal, Construction, Retail, Communication, Enterprise)
  const allIcons: IconConfig[] = [
    { Icon: ClioIcon, color: "bg-white", name: "Clio" },
    { Icon: ProcoreIcon, color: "bg-white", name: "Procore" },
    { Icon: SAPIcon, color: "bg-white", name: "SAP" },
    { Icon: EpicorIcon, color: "bg-white", name: "Epicor" },
    { Icon: QuickBooksIcon, color: "bg-white", name: "QuickBooks" },
    { Icon: XeroIcon, color: "bg-white", name: "Xero" },
    { Icon: SalesforceIcon, color: "bg-white", name: "Salesforce" },
    { Icon: HubSpotIcon, color: "bg-white", name: "HubSpot" },
    { Icon: ShopifyIcon, color: "bg-white", name: "Shopify" },
    { Icon: AmazonIcon, color: "bg-white", name: "Amazon" },
    { Icon: SlackIcon, color: "bg-white", name: "Slack" },
    { Icon: Microsoft365Icon, color: "bg-white", name: "Microsoft365" },
    { Icon: GoogleDocsIcon, color: "bg-white", name: "GoogleDocs" },
    { Icon: ChatGPTIcon, color: "bg-white", name: "ChatGPT" },
    // Repeat core tools to reach 21 for visual density
    { Icon: ClioIcon, color: "bg-white", name: "Clio" },
    { Icon: ProcoreIcon, color: "bg-white", name: "Procore" },
    { Icon: SAPIcon, color: "bg-white", name: "SAP" },
    { Icon: EpicorIcon, color: "bg-white", name: "Epicor" },
    { Icon: SalesforceIcon, color: "bg-white", name: "Salesforce" },
    { Icon: HubSpotIcon, color: "bg-white", name: "HubSpot" },
    { Icon: QuickBooksIcon, color: "bg-white", name: "QuickBooks" },
  ];

  // ASSEMBLY LINE STATE
  const [activeIcons, setActiveIcons] = useState<Map<number, ActiveIcon>>(new Map());
  const nextIconIndexRef = useRef(0); // Which icon to spawn next (cycles 0-14)
  const spawnCountRef = useRef(0); // Total spawns (for left/right alternation)
  const keyCounterRef = useRef(0); // Unique key generator
  const [hasStarted, setHasStarted] = useState(false); // NEW: Track if animation has started

  const ICON_DURATION = 13000; // 10s travel + 3s respawn delay
  const INITIAL_DELAY = 1500; // 1.5s delay before first icon spawns (user reads hero copy)
  const MAX_MOBILE_ICONS = 5; // Mobile: limit to 5 concurrent icons

  // Start animation after initial delay
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, INITIAL_DELAY);

    return () => clearTimeout(startTimer);
  }, []);

  // ASSEMBLY LINE SPAWN CONTROLLER
  useEffect(() => {
    // Don't start spawning until after initial delay
    if (!hasStarted) return;

    const spawnInterval = setInterval(() => {
      const currentTime = Date.now();
      
      setActiveIcons(prev => {
        // Mobile: Limit to MAX_MOBILE_ICONS concurrent icons
        if (isMobile && prev.size >= MAX_MOBILE_ICONS) {
          return prev; // Skip spawn if at mobile limit
        }

        // Determine if this spawn should be LEFT (0-5) or RIGHT (6-11)
        const isLeftTurn = spawnCountRef.current % 2 === 0;
        const pathRange = isLeftTurn ? [0, 1, 2, 3, 4, 5] : [6, 7, 8, 9, 10, 11];
        
        // Find available paths on this side
        const availablePaths = pathRange.filter(pathIndex => !prev.has(pathIndex));
        
        // ONLY spawn if there's an available path (prevents duplicates)
        if (availablePaths.length === 0) {
          // No available paths on this side - skip this spawn
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
        nextIconIndexRef.current = (nextIconIndexRef.current + 1) % allIcons.length; // Cycle through all 24 icons
        spawnCountRef.current++;
        
        return newMap;
      });
      
    }, 1300); // Spawn every 1.3 seconds (slowed from 1s to reduce concurrent icons)

    return () => clearInterval(spawnInterval);
  }, [hasStarted, isMobile, allIcons.length]); // Add dependencies

  // Callback when icon completes journey
  const handleIconComplete = (pathIndex: number) => {
    setActiveIcons(prev => {
      const newMap = new Map(prev);
      newMap.delete(pathIndex); // Free the path
      return newMap;
    });
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden min-h-screen">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:72px_72px] z-0" />

      {/* Centered yellow glow orb behind center orb - REDUCED BY 20% */}
      <div className="absolute top-[calc(58%+10px)] md:top-[calc(55%+10px)] left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-52 md:h-52 bg-yellow-500/20 rounded-full blur-3xl animate-pulse z-0" style={{ animationDuration: '3s' }} />

      {/* Floating Icons - Assembly Line */}
      {Array.from(activeIcons.entries()).map(([pathIndex, activeIcon]) => {
        const icon = allIcons[activeIcon.iconIndex];
        
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

      {/* Central Orb with Clave Solutions Logo - z-10 - REDUCED BY 20% */}
      <div className="absolute top-[calc(58%+10px)] md:top-[calc(55%+10px)] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          {/* Pulsing cyan glow rings */}
          <div className="absolute inset-0 -m-5 sm:-m-4 md:-m-6 rounded-full bg-cyan-400/30 blur-xl animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-0 -m-3 sm:-m-3 md:-m-5 rounded-full bg-cyan-400/20 blur-lg animate-pulse" style={{ animationDuration: '3s' }} />
          
          {/* Main orb with golden key logo - REDUCED BY 20% */}
          <div className="relative w-40 h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 sm:border-2 md:border-3 border-cyan-400/50 shadow-[0_0_50px_rgba(6,182,212,0.6)] md:shadow-[0_0_50px_rgba(6,182,212,0.6)] flex items-center justify-center backdrop-blur-sm">
            {/* Golden Key Logo - PNG Image - SCALED DOWN BY 20% */}
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

      {/* Hero Content - REORGANIZED: Text above, Orb in center, Buttons below */}
      <div className="relative z-30 min-h-screen">
        {/* TOP: Headline + Description with Frosted Glass Backdrop - ABSOLUTE POSITIONED */}
        <div className="absolute top-20 sm:top-24 md:top-20 left-0 right-0 flex flex-col items-center px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 sm:space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-yellow-400 leading-[1.15] tracking-tight animate-fade-in max-w-xs sm:max-w-none mx-auto">
                Stop Losing Time to<br />Disconnected Systems
              </h1>
              {/* Clean subheading - NO container, pure typography */}
              <p className="text-base sm:text-base md:text-lg lg:text-xl text-slate-100 leading-relaxed animate-fade-in-delay max-w-3xl mx-auto">
                We design integrations and automations so cases, jobs, and orders move between your existing systems without manual entries, human error or status chasing.
              </p>
              {/* SEO-friendly H2 with ultra-minimal container - subtle accent only */}
              <div className="backdrop-blur-md bg-slate-900/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 inline-block border border-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                <h2 className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed animate-fade-in-delay flex flex-wrap items-center justify-center gap-2">
                  <span>Business Automations for</span>
                  <RotatingAudience 
                    audiences={[
                      "law firms",
                      "accounting teams",
                      "construction",
                      "field services",
                      "distributors",
                      "logistics",
                      "retail ops"
                    ]}
                    intervalMs={4000}
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM: Buttons - ABSOLUTE POSITIONED AT BOTTOM */}
        <div className="absolute bottom-12 sm:bottom-12 md:bottom-16 left-0 right-0 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center px-4 sm:px-6 animate-fade-in-delay-2 mb-6 sm:mb-0">
          <button className="px-5 sm:px-7 md:px-9 py-2.5 sm:py-3 md:py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:shadow-[0_0_50px_rgba(6,182,212,0.7)] transition-all duration-300 text-sm sm:text-base md:text-base font-semibold w-full sm:w-auto" onClick={onBookAuditClick}>
            Book Your Integration Audit
          </button>
          {/* Mobile: Show as text link, Desktop: Show as button */}
          <button className="hidden sm:flex px-5 sm:px-7 md:px-9 py-2.5 sm:py-3 md:py-3.5 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 rounded-full backdrop-blur-sm transition-all duration-300 text-sm sm:text-base md:text-base font-semibold" onClick={() => {
            document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Industries We Serve
          </button>
          <button className="sm:hidden text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/50 hover:decoration-cyan-300 transition-colors text-sm" onClick={() => {
            document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Industries We Serve →
          </button>
        </div>
      </div>
    </div>
  );
}