import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { KPICards } from "@/components/dashboard/kpi-cards"
import { RakeMap } from "@/components/dashboard/rake-map"
import { ActiveRakesTable } from "@/components/dashboard/active-rakes-table"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto p-4 md:p-6 space-y-4 md:space-y-6">
        {/* Page Title */}
        <div className="space-y-1 md:space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Logistics Overview Dashboard</h1>
          <p className="text-sm md:text-base text-muted-foreground">Real-time monitoring and performance metrics</p>
        </div>

        {/* KPI Cards */}
        <KPICards />

        {/* Interactive Map */}
        <div className="bg-card border border-border rounded-lg p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-foreground">Live Rake Tracking</h2>
          <RakeMap />
        </div>

        {/* Active Rakes Table */}
        <div className="bg-card border border-border rounded-lg p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-foreground">Active Rakes Summary</h2>
          <ActiveRakesTable />
        </div>
      </main>
    </div>
  )
}
