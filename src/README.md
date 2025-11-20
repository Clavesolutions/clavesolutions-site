# Clave Solutions - B2B Automation Consultancy Website

A sophisticated dark-mode website featuring floating icon animations, industry-specific automation solutions, and integrated ROI calculator.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

### Option 1: Vercel (Recommended - 2 minutes)

1. **Push code to GitHub** (see below)
2. **Go to [vercel.com](https://vercel.com)**
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Vercel auto-detects Vite** - click "Deploy"
6. **Done!** Your site is live with auto-deployments on every push

### Option 2: Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy

### Option 3: Manual Deployment

```bash
# Build the site
npm run build

# The dist/ folder contains your production site
# Upload dist/ contents to any static hosting service
```

## 🔧 Git Setup (First Time)

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit - Clave Solutions website"

# Create GitHub repository, then:
git remote add origin https://github.com/YOUR_USERNAME/clave-solutions.git
git branch -M main
git push -u origin main
```

## 🔄 Daily Development Workflow

```bash
# Make your changes in Cursor/VS Code

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Fixed floating icon z-index bug"

# Push to GitHub (triggers auto-deploy on Vercel/Netlify)
git push
```

## 🎯 Key Features

- **Floating Icon Hero**: 21 business software icons flowing into central golden key logo
- **Industry Pages**: Legal & Financial, Construction & Field Ops, Retail & Logistics
- **ROI Calculator**: Interactive calculator with industry-specific metrics
- **Calendly Integration**: Direct booking for Integration Audits
- **Dark Mode Design**: Frosted glass effects, cyan/golden gradients, tech aesthetics
- **Accessibility**: ADHD-friendly, 40+ audience optimized, WCAG compliant

## 📁 Project Structure

```
/
├── components/          # React components
│   ├── FloatingHero.tsx
│   ├── FloatingIcon.tsx
│   ├── IndustryFloatingHero.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ui/             # shadcn/ui components
├── pages/              # Page components
├── config/             # Icon configurations
├── styles/             # Global CSS
└── public/             # Static assets
```

## 🔐 Environment Variables

Create `.env` file for local development:

```env
# Add any API keys here (Calendly, analytics, etc.)
# NEVER commit .env to git (already in .gitignore)
```

## 📊 Analytics

Plausible Analytics configured - add your domain in production:
- Script tag in index.html
- Dashboard: plausible.io

## 🐛 Known Issues

- None! Site is 100% launch-ready

## 📝 License

Proprietary - Clave Solutions
