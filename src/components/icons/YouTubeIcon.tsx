export default function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="youtubeGradient" x1="200" y1="-1" x2="200" y2="399" gradientTransform="matrix(-1 0 0 1 400 1)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#E52D27"/>
          <stop offset="1" stopColor="#BF171D"/>
        </linearGradient>
      </defs>
      <circle r="200" cy="200" cx="200" fill="url(#youtubeGradient)"/>
      <path opacity="0.12" d="M169.6,158.9l63.9,42.7l9-4.6L169.6,158.9z"/>
      <path fill="#FFFFFF" d="M331.2 145.1c0 0-2.6-18.6-10.7-26.8-10.2-10.8-21.8-10.8-27-11.4-37.8-2.7-94.4-2.7-94.4-2.7H199c0 0-56.6 0-94.4 2.7-5.3.6-16.8.7-27 11.4-8.1 8.2-10.7 26.8-10.7 26.8s-2.7 21.8-2.7 43.7v20.5c0 21.8 2.7 43.7 2.7 43.7s2.6 18.6 10.7 26.8c10.3 10.8 23.7 10.4 29.7 11.5 21.6 2.1 91.7 2.7 91.7 2.7s56.7-.1 94.5-2.8c5.3-.6 16.8-.7 27-11.4 8.1-8.2 10.7-26.8 10.7-26.8s2.7-21.8 2.7-43.7v-20.5c0-21.9-2.7-43.7-2.7-43.7zM171.1 234v-75.8l72.9 38L171.1 234z"/>
    </svg>
  );
}
