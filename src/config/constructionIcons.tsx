import { HardHat, Ruler, Truck, Building2, Clipboard, Wrench } from "lucide-react";
import ProcoreIcon from "../components/icons/ProcoreIcon";
import ViewpointIcon from "../components/icons/ViewpointIcon";
import SageIcon from "../components/icons/SageIcon";
import ExcelIcon from "../components/icons/ExcelIcon";
import Microsoft365Icon from "../components/icons/Microsoft365Icon";

// Wrapper components for Lucide icons with varied colors - REDUCED PADDING for size consistency
const HardHatIconWrapper = ({ className }: { className?: string }) => (
  <div className={`${className} flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-1 shadow-lg`}>
    <HardHat className="w-full h-full text-white" />
  </div>
);

const Building2IconWrapper = ({ className }: { className?: string }) => (
  <div className={`${className} flex items-center justify-center bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg p-1 shadow-lg`}>
    <Building2 className="w-full h-full text-cyan-300" />
  </div>
);

const ClipboardIconWrapper = ({ className }: { className?: string }) => (
  <div className={`${className} flex items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg p-1 shadow-lg`}>
    <Clipboard className="w-full h-full text-white" />
  </div>
);

export const constructionIcons = [
  // Brand logos - ALL on white background for visibility
  { Icon: ProcoreIcon, color: "bg-white", name: "Procore" },
  { Icon: ViewpointIcon, color: "bg-white", name: "Viewpoint" },
  { Icon: SageIcon, color: "bg-white", name: "Sage" },
  { Icon: ExcelIcon, color: "bg-white", name: "Excel" },
  { Icon: Microsoft365Icon, color: "bg-white", name: "Microsoft365" },
  // Strategic generic icons - REDUCED to 3 key concepts (Safety, Site, Reports)
  { Icon: HardHatIconWrapper, color: "transparent", name: "Safety" },
  { Icon: Building2IconWrapper, color: "transparent", name: "Site" },
  { Icon: ClipboardIconWrapper, color: "transparent", name: "Reports" },
];