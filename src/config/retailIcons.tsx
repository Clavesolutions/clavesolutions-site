import { ShoppingCart, Package, Truck, Warehouse, Barcode, Globe } from "lucide-react";
import SAPIcon from "../components/icons/SAPIcon";
import EpicorIcon from "../components/icons/EpicorIcon";
import ShopifyIcon from "../components/icons/ShopifyIcon";
import AmazonIcon from "../components/icons/AmazonIcon";

// Wrapper components for Lucide icons with varied colors - REDUCED PADDING for size consistency
const ShoppingCartIconWrapper = ({ className }: { className?: string }) => (
  <div className={`${className} flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-1 shadow-lg`}>
    <ShoppingCart className="w-full h-full text-white" />
  </div>
);

const PackageIconWrapper = ({ className }: { className?: string }) => (
  <div className={`${className} flex items-center justify-center bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg p-1 shadow-lg`}>
    <Package className="w-full h-full text-white" />
  </div>
);

const TruckIconWrapper = ({ className }: { className?: string }) => (
  <div className={`${className} flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-1 shadow-lg`}>
    <Truck className="w-full h-full text-white" />
  </div>
);

export const retailIcons = [
  // Brand logos - ALL on white background for visibility
  { Icon: SAPIcon, color: "bg-white", name: "SAP" },
  { Icon: EpicorIcon, color: "bg-white", name: "Epicor" },
  { Icon: ShopifyIcon, color: "bg-white", name: "Shopify" },
  { Icon: AmazonIcon, color: "bg-white", name: "Amazon" },
  // Strategic generic icons - REDUCED to 3 key concepts (Orders, Inventory, Shipping)
  { Icon: ShoppingCartIconWrapper, color: "transparent", name: "Orders" },
  { Icon: PackageIconWrapper, color: "transparent", name: "Inventory" },
  { Icon: TruckIconWrapper, color: "transparent", name: "Shipping" },
];