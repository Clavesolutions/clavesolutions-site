export default function MessagesIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      className={className}
    >
      <defs>
        <linearGradient
          id="messagesGradient1"
          x1="-8.9269485"
          y1="-26.204216"
          x2="55.073051"
          y2="-26.204216"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style={{ stopColor: "#00ea66", stopOpacity: 1 }} />
          <stop offset="1" style={{ stopColor: "#00d50f", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient
          id="messagesGradient2"
          x1="36.551678"
          y1="1034.4402"
          x2="36.551678"
          y2="1013.8735"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.79397056,0,0,0.8101499,7.9701593,192.95214)"
        >
          <stop offset="0" style={{ stopColor: "#e5f5d9", stopOpacity: 1 }} />
          <stop offset="1" style={{ stopColor: "#ffffff", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <g transform="translate(5.7957838,8.9269487)">
        <rect
          ry="15"
          y="-58.204216"
          x="-8.9269485"
          height="64"
          width="64"
          style={{ fill: "url(#messagesGradient1)", fillOpacity: 1, stroke: "none" }}
          transform="matrix(0,1,-1,0,0,0)"
        />
        <g transform="translate(-10.183612,-993.29452)">
          <path
            d="m 36.400186,1001.3682 c -3.512471,0 -6.76115,0.9082 -9.470545,2.4728 -0.459003,0.2649 -0.909573,0.5314 -1.335274,0.8324 -0.410011,0.2911 -0.786181,0.611 -1.162182,0.9336 -0.01365,0.011 -0.03584,0.013 -0.04945,0.025 -3.076322,2.6372 -4.994908,6.2703 -4.994908,10.2944 0,3.9657 1.873266,7.5407 4.871271,10.1681 0.01458,0.107 0.02473,0.2216 0.02473,0.3028 0,2.3216 -1.785911,4.213 -4.055273,4.2389 1.103827,0.4623 2.343066,0.7318 3.610183,0.7318 2.190415,0 4.163131,-0.8153 5.761454,-2.0943 2.08136,0.7789 4.383711,1.2363 6.799999,1.2363 9.388621,0 16.987636,-6.5355 16.987636,-14.5836 0,-8.0481 -7.599015,-14.5584 -16.987636,-14.5584 z"
            style={{ fill: "url(#messagesGradient2)", fillOpacity: 1, stroke: "none" }}
          />
        </g>
      </g>
    </svg>
  );
}
