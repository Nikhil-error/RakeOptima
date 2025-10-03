"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Clock, DollarSign, Leaf } from "lucide-react"
import { Sparkline } from "@/components/dashboard/sparkline"

const kpiData = [
  {
    title: "Rake Utilization Rate",
    value: "87.3%",
    change: "+2.4%",
    trend: "up" as const,
    icon: TrendingUp,
    data: [75, 78, 82, 79, 85, 83, 87],
    color: "rgb(34, 197, 94)",
  },
  {
    title: "On-Time Dispatch %",
    value: "92.1%",
    change: "+1.2%",
    trend: "up" as const,
    icon: Clock,
    data: [88, 89, 91, 90, 92, 91, 92],
    color: "rgb(59, 130, 246)",
  },
  {
    title: "Avg. Freight Cost / Ton",
    value: "₹2,847",
    change: "-3.1%",
    trend: "down" as const,
    icon: DollarSign,
    data: [3100, 3050, 2980, 2920, 2890, 2860, 2847],
    color: "rgb(249, 115, 22)",
  },
  {
    title: "Total CO₂ Emissions",
    value: "1,247 tons",
    change: "-5.2%",
    trend: "down" as const,
    icon: Leaf,
    data: [1450, 1420, 1380, 1340, 1300, 1270, 1247],
    color: "rgb(34, 197, 94)",
  },
]

export function KPICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {kpiData.map((kpi) => {
        const Icon = kpi.icon
        const isPositive = kpi.trend === "up"
        const changeColor = kpi.title.includes("Cost") || kpi.title.includes("CO₂") ? !isPositive : isPositive

        return (
          <Card key={kpi.title} className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">{kpi.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-baseline justify-between gap-2">
                  <div className="text-xl sm:text-2xl font-bold text-foreground">{kpi.value}</div>
                  <div
                    className={`text-xs sm:text-sm font-medium flex-shrink-0 ${changeColor ? "text-green-500" : "text-red-500"}`}
                  >
                    {kpi.change}
                  </div>
                </div>
                <Sparkline data={kpi.data} color={kpi.color} />
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
