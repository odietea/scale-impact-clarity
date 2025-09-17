import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Layout, Grid, Minimize2 } from "lucide-react";
import Index from "@/pages/Index";
import ModernLayout from "@/components/layouts/ModernLayout";
import MinimalLayout from "@/components/layouts/MinimalLayout";

const layouts = [
  { id: "default", name: "Professional", icon: Layout, component: Index },
  { id: "modern", name: "Modern", icon: Grid, component: ModernLayout },
  { id: "minimal", name: "Minimal", icon: Minimize2, component: MinimalLayout }
];

const LayoutSwitcher = () => {
  const [activeLayout, setActiveLayout] = useState("default");

  const ActiveComponent = layouts.find(l => l.id === activeLayout)?.component || Index;

  return (
    <>
      <div className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm border rounded-lg p-4 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <Layout className="w-4 h-4" />
          <span className="text-sm font-medium">Layout Styles</span>
        </div>
        <div className="space-y-2">
          {layouts.map((layout) => {
            const Icon = layout.icon;
            return (
              <Button
                key={layout.id}
                variant={activeLayout === layout.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveLayout(layout.id)}
                className="w-full text-xs flex items-center gap-2"
              >
                <Icon className="w-3 h-3" />
                {layout.name}
              </Button>
            );
          })}
        </div>
      </div>
      
      <ActiveComponent />
    </>
  );
};

export default LayoutSwitcher;