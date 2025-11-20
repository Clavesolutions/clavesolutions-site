# Round 2: Remaining SEO Content Updates

## ✅ COMPLETED SO FAR:
1. **Homepage** - Added SEO intro section with H2, updated WhatWeDoSection H2 and H3
2. **ROI Calculator** - Updated H2 subtitle for SEO

## 🔄 REMAINING UPDATES NEEDED:

### A. Industries Overview Page (`/pages/IndustriesOverviewPage.tsx`)

**Location 1: After hero copy, before industry cards**
Add new H2 section:
```
<div className="text-center max-w-4xl mx-auto mb-12">
  <h2 className="text-3xl sm:text-4xl text-white mb-4">
    Automation and integration services for legal, construction, retail, and logistics operations
  </h2>
</div>
```

**Location 2: Just before the three industry cards**
Add H3:
```
<h3 className="text-2xl sm:text-3xl text-white text-center mb-10">
  Industries we help with workflow automation
</h3>
```

**Location 3: NEW SECTION - Popular Automations**
Create component `/components/PopularAutomationsSection.tsx`:

```tsx
export default function PopularAutomationsSection() {
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Popular automations by industry
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Legal & Financial */}
          <div className="bg-slate-900/60 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Legal & Financial – popular automations
            </h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Clio ↔ QuickBooks contact and matter sync</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Intake forms → automatic matter creation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Email → tasks, reminders, and client status updates</span>
              </li>
            </ul>
          </div>

          {/* Construction & Field Operations */}
          <div className="bg-slate-900/60 backdrop-blur-xl border border-orange-400/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-orange-400 mb-6">
              Construction & Field Operations – popular automations
            </h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <span>Procore ↔ Sage / Viewpoint job and cost sync</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <span>Field reports → invoice and change-order workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <span>RFIs and change orders → automatic approvals and notifications</span>
              </li>
            </ul>
          </div>

          {/* Retail & Logistics */}
          <div className="bg-slate-900/60 backdrop-blur-xl border border-green-400/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-400 mb-6">
              Retail & Logistics – popular automations
            </h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">•</span>
                <span>Shopify + Amazon → unified inventory and order sync</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">•</span>
                <span>Orders → WMS / TMS for pick, pack, and ship</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">•</span>
                <span>SAP ↔ ecommerce platforms to keep pricing and products aligned</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
```

Then import and add before Footer in IndustriesOverviewPage.

---

### B. Legal & Financial Page (`/pages/LegalFinancialPage.tsx`)

**Update 1: Add H2 after hero body**
After the main paragraph ending with "...while you focus on the law and the client relationship.", add:
```tsx
<h2 className="text-2xl sm:text-3xl text-slate-200 mt-8 mb-6 leading-tight">
  Workflow automation & system integrations for law firms and accounting practices
</h2>
```

**Update 2: Pain Points section heading**
Find the section with pain points and add H3:
```tsx
<h3 className="text-2xl font-bold text-white mb-8">
  Where legal and financial teams lose time today
</h3>
```

**Update 3: Solutions section heading**
Before the solutions cards, add H3:
```tsx
<h3 className="text-2xl font-bold text-white mb-8">
  Automations that connect Clio, email, and accounting tools
</h3>
```

**Update 4: Process/Audit section heading**
Before the "how it works" or audit steps, add H3:
```tsx
<h3 className="text-2xl font-bold text-white mb-8">
  How a Legal Ops Integration Audit works
</h3>
```

**Update 5: Weave tool names into solutions**
In the first solution card about client intake, change text to mention tools explicitly:
```
"We integrate Clio and QuickBooks to automatically create or update contacts and matters from your intake tools and email, then sync the right data into accounting—no re-typing."
```

---

### C. Construction & Field Ops Page (`/pages/ConstructionFieldOpsPage.tsx`)

**Update 1: Add H2 after hero body**
```tsx
<h2 className="text-2xl sm:text-3xl text-slate-200 mt-8 mb-6 leading-tight">
  Construction workflow automation and Procore–accounting integrations
</h2>
```

**Update 2: Pain Points section heading**
```tsx
<h3 className="text-2xl font-bold text-white mb-8">
  Where field and office teams get out of sync
</h3>
```

**Update 3: Solutions section heading**
```tsx
<h3 className="text-2xl font-bold text-white mb-8">
  Automations that connect Procore, email, and accounting
</h3>
```

**Update 4: Process section heading**
```tsx
<h3 className="text-2xl font-bold text-white mb-8">
  From field data to faster billing and reporting
</h3>
```

**Update 5: Weave tool names**
In solutions copy, mention:
```
"We connect Procore and Sage/Viewpoint so job costs, change orders, and invoices stay aligned without spreadsheet exports and manual reconciliation."
```

---

### D. Retail & Logistics Page (`/pages/RetailLogisticsPage.tsx`)

**Update 1: Add H2 after hero body**
```tsx
<h2 className="text-2xl sm:text-3xl text-slate-200 mt-8 mb-6 leading-tight">
  Retail, ecommerce, and logistics automations across Shopify, Amazon, and SAP
</h2>
```

**Update 2: Pain Points section heading**
```tsx
<h3 className="text-2xl font-bold text-white mb-8">
  Where orders, inventory, and shipments fall out of sync
</h3>
```

**Update 3: Solutions section heading**
```tsx
<h3 className="text-2xl font-bold text-white mb-8">
  Automations that connect ecommerce, ERP, WMS, and TMS
</h3>
```

**Update 4: Process section heading**
```tsx
<h3 className="text-2xl font-bold text-white mb-8">
  What a Supply Chain Integration Audit covers
</h3>
```

**Update 5: Weave tool names**
In solutions copy, mention:
```
"We sync Shopify, Amazon, and SAP so inventory and invoices match without spreadsheet gymnastics or end-of-day reconciliation marathons."
```

---

## IMPLEMENTATION NOTES:

1. **Don't use font-size Tailwind classes** - Typography is set in globals.css
2. **Keep frosted glass aesthetic** - Use backdrop-blur and bg-slate-900/60 patterns
3. **Color coding by industry:**
   - Legal: cyan-400
   - Construction: orange-400
   - Retail: green-400
4. **Maintain dark control room theme** throughout

## PRIORITY ORDER:

1. Industries Overview Page (includes new Popular Automations section - biggest lift)
2. Legal & Financial Page
3. Construction & Field Ops Page
4. Retail & Logistics Page

Once these are complete, Round 2 will be finished!
