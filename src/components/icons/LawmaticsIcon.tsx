export default function LawmaticsIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 200 200"
      fill="none"
      className={className}
    >
      {/* Dark Blue/Navy Bar (shortest) */}
      <rect 
        x="20" 
        y="110" 
        width="30" 
        height="70" 
        rx="15" 
        fill="#1F3B5C"
      />
      
      {/* Yellow Bar (medium-short) */}
      <rect 
        x="60" 
        y="75" 
        width="30" 
        height="105" 
        rx="15" 
        fill="#FDB813"
      />
      
      {/* Orange Bar (medium-tall) */}
      <rect 
        x="100" 
        y="45" 
        width="30" 
        height="135" 
        rx="15" 
        fill="#FF8C42"
      />
      
      {/* Red/Burgundy Bar (tallest) */}
      <rect 
        x="140" 
        y="20" 
        width="30" 
        height="160" 
        rx="15" 
        fill="#C44E4E"
      />
      
      {/* Bottom connecting "L" shape base */}
      <path 
        d="M 35 180 L 35 165 Q 35 155 45 155 L 155 155 Q 165 155 165 165 L 165 180 Q 165 190 155 190 L 45 190 Q 35 190 35 180 Z" 
        fill="#1F3B5C"
      />
    </svg>
  );
}
