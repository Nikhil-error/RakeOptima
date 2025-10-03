import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { PendingOrders } from "@/components/rake-planning/pending-orders"
import { RakeCanvas } from "@/components/rake-planning/rake-canvas"
import { AIOptimizer } from "@/components/rake-planning/ai-optimizer"

export default function RakePlanningPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto p-4 md:p-6">
        <div className="space-y-2 md:space-y-4 mb-4 md:mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Rake Planning Workbench</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Drag orders to wagons or use AI optimization for best results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Left Panel - Pending Orders */}
          <div className="lg:col-span-3">
            <PendingOrders />
          </div>

          {/* Center Panel - Rake Canvas */}
          <div className="lg:col-span-6">
            <RakeCanvas />
          </div>

          {/* Right Panel - AI Optimizer */}
          <div className="lg:col-span-3">
            <AIOptimizer />
          </div>
        </div>
      </main>
    </div>
  )
}
