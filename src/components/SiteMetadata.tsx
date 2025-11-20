import { useEffect } from 'react';

/**
 * SiteMetadata Component
 * Adds favicon, meta tags, and structured data for SEO and Google Search appearance
 */
export default function SiteMetadata() {
  useEffect(() => {
    // Set page title - SHORTENED for better browser tab display
    document.title = "Clave Solutions - B2B Automation & Integration";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Stop losing time to disconnected systems. We engineer custom integrations and automations for legal, construction, and logistics teams.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Stop losing time to disconnected systems. We engineer custom integrations and automations for legal, construction, and logistics teams.';
      document.head.appendChild(meta);
    }

    // Add favicon links
    const addLink = (rel: string, type: string, sizes: string, href: string) => {
      const existingLink = document.querySelector(`link[rel="${rel}"][sizes="${sizes}"]`);
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = rel;
        link.type = type;
        if (sizes) link.setAttribute('sizes', sizes);
        link.href = href;
        document.head.appendChild(link);
      }
    };

    // Standard favicons (SVG for better quality)
    addLink('icon', 'image/svg+xml', '', '/favicon.svg');
    addLink('icon', 'image/svg+xml', '32x32', '/favicon-32.svg');
    addLink('icon', 'image/svg+xml', '16x16', '/favicon-16.svg');
    addLink('apple-touch-icon', 'image/svg+xml', '180x180', '/apple-touch-icon.svg');
    
    // Web app manifest
    const manifestLink = document.querySelector('link[rel="manifest"]');
    if (!manifestLink) {
      const link = document.createElement('link');
      link.rel = 'manifest';
      link.href = '/site.webmanifest';
      document.head.appendChild(link);
    }

    // Theme color for mobile browsers
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMeta) {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = '#06b6d4';
      document.head.appendChild(meta);
    }

    // Open Graph tags for social sharing
    const addOGMeta = (property: string, content: string) => {
      const existing = document.querySelector(`meta[property="${property}"]`);
      if (!existing) {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    addOGMeta('og:title', 'Clave Solutions - B2B Automation & Integration');
    addOGMeta('og:description', 'Stop losing time to disconnected systems. Custom integrations and automations for mid-market operations teams.');
    addOGMeta('og:type', 'website');
    addOGMeta('og:url', 'https://clavesolutions.ai');
    addOGMeta('og:image', 'https://clavesolutions.ai/og-image.png');

    // Twitter Card tags
    const addTwitterMeta = (name: string, content: string) => {
      const existing = document.querySelector(`meta[name="${name}"]`);
      if (!existing) {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    addTwitterMeta('twitter:card', 'summary_large_image');
    addTwitterMeta('twitter:title', 'Clave Solutions - B2B Automation & Integration');
    addTwitterMeta('twitter:description', 'Stop losing time to disconnected systems. Custom integrations for legal, construction, and logistics teams.');
    addTwitterMeta('twitter:image', 'https://clavesolutions.ai/og-image.png');

    // Add JSON-LD Structured Data for Google
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Clave Solutions",
        "url": "https://clavesolutions.ai",
        "logo": "https://clavesolutions.ai/logo-512.png",
        "description": "Custom automations and integrations for mid-market operations teams",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Louisville",
          "addressRegion": "KY",
          "addressCountry": "US"
        },
        "email": "hello@clavesolutions.ai",
        "sameAs": [
          "https://linkedin.com/company/clavesolutions"
        ],
        "areaServed": "North America",
        "serviceType": [
          "Business Automation",
          "System Integration",
          "Workflow Automation",
          "API Integration"
        ]
      });
      document.head.appendChild(script);
    }
  }, []);

  return null; // This component doesn't render anything
}