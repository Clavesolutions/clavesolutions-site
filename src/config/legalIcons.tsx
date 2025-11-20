import { Scale, FileText, Briefcase, Calendar, Users, Mail } from "lucide-react";
import ClioIcon from "../components/icons/ClioIcon";
import LawmaticsIcon from "../components/icons/LawmaticsIcon";
import QuickBooksIcon from "../components/icons/QuickBooksIcon";
import XeroIcon from "../components/icons/XeroIcon";
import Microsoft365Icon from "../components/icons/Microsoft365Icon";

// Wrapper components for Lucide icons with varied colors - REDUCED PADDING for size consistency
const ScaleIconWrapper = ({ className }: { className?: string }) => (
  <div className={`${className} flex items-center justify-center bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg p-1 shadow-lg`}>
    <Scale className="w-full h-full text-white" />
  </div>
);

const FileTextIconWrapper = ({ className }: { className?: string }) => (
  <div className={`${className} flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-1 shadow-lg`}>
    <FileText className="w-full h-full text-white" />
  </div>
);

const BriefcaseIconWrapper = ({ className }: { className?: string }) => (
  <div className={`${className} flex items-center justify-center bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg p-1 shadow-lg`}>
    <Briefcase className="w-full h-full text-cyan-300" />
  </div>
);

export const legalIcons = [
  // Brand logos - ALL on white background for visibility
  { Icon: ClioIcon, color: "bg-white", name: "Clio" },
  { Icon: LawmaticsIcon, color: "bg-white", name: "Lawmatics" },
  { Icon: QuickBooksIcon, color: "bg-white", name: "QuickBooks" },
  { Icon: XeroIcon, color: "bg-white", name: "Xero" },
  { Icon: Microsoft365Icon, color: "bg-white", name: "Microsoft365" },
  // Strategic generic icons - REDUCED to 3 key concepts (Justice, Documents, Cases)
  { Icon: ScaleIconWrapper, color: "transparent", name: "Justice" },
  { Icon: FileTextIconWrapper, color: "transparent", name: "Documents" },
  { Icon: BriefcaseIconWrapper, color: "transparent", name: "Cases" },
];