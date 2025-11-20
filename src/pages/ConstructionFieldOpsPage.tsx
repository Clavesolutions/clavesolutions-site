import { useEffect } from "react";
import { FileText, AlertTriangle, DollarSign, Zap, ArrowRightLeft, BarChart3 } from "lucide-react";
import Header from "../components/Header";
import IndustryFloatingHero from "../components/IndustryFloatingHero";
import IndustryPageLayout from "../components/IndustryPageLayout";
import { constructionIcons } from "../config/constructionIcons";

interface ConstructionFieldOpsPageProps {
  onBookAuditClick: () => void;
}

export default function ConstructionFieldOpsPage({ onBookAuditClick }: ConstructionFieldOpsPageProps) {
  useEffect(() => {
    document.title = "Construction Workflow Automation & Procore Integrations | ClaveSolutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "ClaveSolutions helps construction and field operations teams automate RFIs, change orders, daily reports and job cost updates by connecting Procore, Viewpoint, Sage, Excel and other systems. Reduce manual data entry between field and office."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header onBookAuditClick={onBookAuditClick} />
      
      {/* Hero with Floating Icons */}
      <IndustryFloatingHero
        icons={constructionIcons}
        heroH1={<>Automations that keep your<br className="hidden md:block" /> projects, field, and office in sync.</>}
        heroSubhead="We integrate your project, field, and accounting systems so RFIs, change orders, and daily reports move automatically—no re-typing, no chasing updates."
        audienceLabel="Built for"
        audiences={[
          "general contractors",
          "specialty trades",
          "project managers",
          "field supervisors",
          "owners' reps",
          "construction accountants"
        ]}
        automationLabel="We automate:"
        automations={[
          "RFIs & submittals",
          "change orders",
          "daily reports",
          "job cost sync",
          "subcontractor onboarding",
          "progress billing"
        ]}
        primaryCTA="Book Your Integration Audit"
        secondaryCTA="See ROI Calculator"
        onPrimaryCTAClick={onBookAuditClick}
        onSecondaryCTAClick={() => window.location.href = '/roi-calculator'}
      />
      
      {/* Rest of page content */}
      <IndustryPageLayout
        // Pain Points
        painHeading="Where field and office teams get out of sync"
        painPoints={[
          {
            title: "RFIs and change orders logged twice",
            description: "Field teams update Procore; office staff re-type details into accounting, job costing or custom spreadsheets. Each change order means 30-45 minutes of duplicate data entry across systems.",
            icon: <FileText className="w-6 h-6 text-red-400" />,
          },
          {
            title: "Daily reports stuck in Procore",
            description: "Production, delays and safety notes live in daily logs but don't show up in dashboards or cost reports without manual exports. PMs spend hours every week copying data into Excel.",
            icon: <AlertTriangle className="w-6 h-6 text-red-400" />,
          },
          {
            title: "COs and billings out of sync",
            description: "Approved changes aren't reflected quickly in contracts and invoices, so you eat costs or scramble at month-end. Accounting teams chase PMs for change order backup that's already in Procore.",
            icon: <DollarSign className="w-6 h-6 text-red-400" />,
          },
        ]}
        
        // Solutions
        solutionHeading="Automations that connect Procore, email, and accounting"
        solutions={[
          {
            title: "Procore → Job Costing and Accounting",
            description: "We connect Procore and Sage/Viewpoint so RFIs, change orders and key quantities sync into job costing and accounting automatically—finance isn't chasing field teams anymore. Change orders hit accounting within minutes, not days.",
            timeline: "Typical build: 3-4 weeks",
            icon: <ArrowRightLeft className="w-6 h-6 text-cyan-400" />,
          },
          {
            title: "Daily Report Roll-ups",
            description: "Push labor, equipment and issue summaries from daily reports into simple dashboards so PMs see trends without exporting to Excel. Get weekly production and safety summaries automatically.",
            timeline: "Typical build: 2-3 weeks",
            icon: <Zap className="w-6 h-6 text-cyan-400" />,
          },
          {
            title: "Change Order and Billing Workflows",
            description: "Trigger tasks and document updates when a CO is approved so contracts, billings and internal tracking stay in lockstep. No more month-end surprises on unbilled change work.",
            timeline: "Typical build: 2-4 weeks",
            icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
          },
        ]}
        
        // Process
        processHeading="From field data to faster billing and reporting"
        processTimeline="Typical engagement: 6-10 weeks from audit to live automations"
        processSteps={[
          {
            number: "1",
            title: "Field Ops Integration Audit",
            description: "We map how information moves from site to office today—daily reports, RFIs, COs, schedules and costs. We identify where PMs, supers and accounting are doing the same work twice.",
          },
          {
            number: "2",
            title: "Design the automations",
            description: "We define where integrations, automations and simple checklists will remove the most friction for your teams. You see exactly how data will flow before we build anything.",
          },
          {
            number: "3",
            title: "Build, pilot and scale",
            description: "We start with one or two high-value workflows, pilot them on a subset of projects (typically 1-2 active jobs), then scale once the process is proven and field teams are comfortable.",
          },
        ]}
        
        // CTA Band
        ctaBandHeading="Ready to stop updating Procore and your accounting system by hand?"
        ctaBandBody="Let's map a few key workflows and find the integrations that save your supers, PMs and accounting team the most time. Most teams see ROI within 60 days."
        ctaPrimary="Book Field Ops Audit"
        ctaSecondary="Discuss a Specific Integration"
        
        // FAQ
        faqs={[
          {
            question: "Do you only work with Procore?",
            answer: "No. Procore is common, but we also work with other project management, scheduling and accounting tools (Buildertrend, PlanGrid, Viewpoint, Sage, Foundation, etc.). The important part is mapping your flow and understanding where the friction lives.",
          },
          {
            question: "Can you integrate multiple systems, not just two-way sync?",
            answer: "Yes. Many projects involve Procore, Viewpoint or Sage, spreadsheets and sometimes custom line-of-business tools. We map the entire flow and build the connections that make sense for your process, not just simple A-to-B syncs.",
          },
          {
            question: "Will this disrupt active projects?",
            answer: "We aim to deploy automations alongside your current process first, then gradually move teams onto the new flow once it's proven. Pilots start with 1-2 projects, and we time go-live around project phases to minimize disruption.",
          },
          {
            question: "What's the typical timeline and cost?",
            answer: "Most construction automations take 6-10 weeks from audit to full rollout. Investment varies by scope, but teams typically see ROI within 60-90 days through time saved and fewer billing errors at month-end.",
          },
        ]}
        
        onBookAuditClick={onBookAuditClick}
      />
    </div>
  );
}