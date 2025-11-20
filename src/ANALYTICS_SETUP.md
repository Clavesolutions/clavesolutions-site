# Plausible Analytics Setup Instructions

## Overview
We've chosen Plausible Analytics as our privacy-friendly analytics solution. It doesn't use cookies, doesn't collect personal information, and doesn't track users across websites.

## Setup Steps

### 1. Sign Up for Plausible
1. Go to [plausible.io](https://plausible.io)
2. Create an account (they offer a 30-day free trial)
3. Choose a plan:
   - **Recommended:** Growth plan (10k-100k monthly pageviews)
   - Pricing: ~$9-19/month depending on traffic

### 2. Add Your Domain
1. In Plausible dashboard, click "Add a website"
2. Enter domain: `clavesolutions.ai`
3. Set timezone to: `America/New_York` (or `America/Louisville`)

### 3. Get Your Tracking Script
Plausible will provide you with a tracking script that looks like this:

```html
<script defer data-domain="clavesolutions.ai" src="https://plausible.io/js/script.js"></script>
```

### 4. Add Script to Your Website

You need to add this script to the `<head>` section of your HTML. Since this is a React app, you have two options:

#### Option A: Add to index.html (Recommended)
1. Open `/index.html` in your project root
2. Add the Plausible script inside the `<head>` tag:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ClaveSolutions - Business Workflow Automation</title>
    
    <!-- Plausible Analytics -->
    <script defer data-domain="clavesolutions.ai" src="https://plausible.io/js/script.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

#### Option B: Add via React Helmet (if needed)
If you need more control, you can use `react-helmet` to inject the script dynamically.

### 5. Set Up Goals in Plausible

Once the script is installed and traffic starts flowing, set up custom goals to track important actions:

1. In Plausible dashboard, go to your site settings
2. Click on "Goals"
3. Add the following goals:

#### Recommended Goals:

**Pageview Goals:**
- Goal type: Pageview
- Page: `/legal-financial-operations-automation`
- Name: "Legal & Financial Page View"

- Goal type: Pageview
- Page: `/construction-field-operations-automation`
- Name: "Construction Page View"

- Goal type: Pageview
- Page: `/retail-logistics-automation`
- Name: "Retail & Logistics Page View"

- Goal type: Pageview
- Page: `/roi-calculator`
- Name: "ROI Calculator Page View"

**Custom Event Goals:**
If you want to track button clicks (requires adding custom event code):
- Goal type: Custom Event
- Event name: `Book Audit Click`

To track button clicks, you'd need to modify the onClick handlers to include:
```javascript
window.plausible('Book Audit Click');
```

### 6. Verify Installation

1. After deploying with the script, visit your website
2. Go to Plausible dashboard
3. Check "Realtime" section to see if your visit is being tracked
4. It may take 1-2 minutes for data to appear

### 7. Explore Your Dashboard

Key metrics you'll see:
- **Unique visitors:** Total people who visited
- **Pageviews:** Total page loads
- **Bounce rate:** % who left after one page
- **Visit duration:** Average time on site
- **Top pages:** Which pages get the most traffic
- **Top sources:** Where visitors are coming from (Google, direct, referrals)
- **Locations:** Geographic data (city/country level)
- **Devices:** Desktop vs mobile breakdown

### 8. Optional: Custom Domain (Advanced)

For maximum privacy and to avoid ad blockers, you can proxy Plausible through your own domain:
- Instead of `plausible.io/js/script.js`
- Use `clavesolutions.ai/js/script.js`

This requires server-side configuration. See [Plausible's proxy guide](https://plausible.io/docs/proxy/introduction).

## Important Notes

### Privacy & Compliance
- ✅ Plausible is GDPR, CCPA, and PECR compliant by default
- ✅ No cookie banner required (Plausible doesn't use cookies)
- ✅ No personal data collected
- ✅ All data is anonymized
- ✅ Data is NOT sold or shared with third parties

### What Plausible DOES Track (anonymously):
- Page URLs visited
- Referrer (where traffic came from)
- Browser type
- Operating system
- Device type (desktop/mobile/tablet)
- Country/city (based on IP, but IP is not stored)

### What Plausible DOES NOT Track:
- ❌ Individual users across sessions
- ❌ Cookies
- ❌ Personal information (names, emails, etc.)
- ❌ Behavior across multiple websites
- ❌ Detailed user journeys

## Cost Estimate

Based on expected traffic:

- **Launch Month (low traffic):** ~500-2,000 pageviews → $9/month
- **6 Months In (growing):** ~5,000-10,000 pageviews → $9/month
- **1 Year (established):** ~20,000-50,000 pageviews → $19/month

Annual cost estimate: $108-228/year

Much more affordable than enterprise tools like Google Analytics 360, and simpler than GA4.

## Support

If you need help:
- Plausible Documentation: https://plausible.io/docs
- Plausible Support: support@plausible.io
- They have excellent customer service and respond quickly

## Next Steps After Setup

1. ✅ Install script on website
2. ✅ Verify tracking is working
3. ✅ Set up key pageview goals
4. ✅ Share dashboard access with team (Plausible allows multiple users)
5. ✅ Check analytics weekly to understand traffic patterns
6. ✅ Use data to:
   - See which industry pages are most popular
   - Understand where visitors come from (SEO, direct, referrals)
   - Track ROI calculator usage
   - Monitor overall site performance

## Alternative: If You Decide Against Plausible

Other privacy-friendly options:
- **Fathom Analytics:** Similar to Plausible, slightly different pricing
- **Simple Analytics:** Another privacy-focused alternative
- **Self-hosted Plausible:** Open source version you can host yourself (requires technical setup)

We recommend Plausible for the best balance of simplicity, privacy, and features.
