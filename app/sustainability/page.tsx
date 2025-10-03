import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { EmissionsChart } from "@/components/sustainability/emissions-chart"
import { TractionSplitChart } from "@/components/sustainability/traction-split-chart"
import { RailVsRoadComparison } from "@/components/sustainability/rail-vs-road-comparison"
import { CarbonIntensiveRoutes } from "@/components/sustainability/carbon-intensive-routes"

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto p-4 md:p-6 space-y-4 md:space-y-6">
        {/* Page Title */}
        <div className="space-y-1 md:space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Logistics Sustainability Performance</h1>
          <p className="text-sm md:text-base text-muted-foreground">Track and optimize your environmental impact</p>
        </div>

        {/* Top Row - Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <EmissionsChart />
          <TractionSplitChart />
        </div>

        {/* Middle Row - Comparison Card */}
        <RailVsRoadComparison />

        {/* Bottom Row - Routes Table */}
        <CarbonIntensiveRoutes />
      </main>
    </div>
  )
}
