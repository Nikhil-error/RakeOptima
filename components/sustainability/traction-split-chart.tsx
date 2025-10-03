"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const tractionData = [
  { name: "Electric Traction", value: 68, color: "rgb(34, 197, 94)" },
  { name: "Diesel Traction", value: 32, color: "rgb(249, 115, 22)" },
]

export function TractionSplitChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Emissions by Traction Type</CardTitle>
        <p className="text-sm text-muted-foreground">Distribution of carbon emissions</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={tractionData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {tractionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
            <div className="text-sm text-muted-foreground">Electric</div>
            <div className="text-2xl font-bold text-green-500">68%</div>
            <div className="text-xs text-muted-foreground">847 tons CO₂</div>
          </div>
          <div className="p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
            <div className="text-sm text-muted-foreground">Diesel</div>
            <div className="text-2xl font-bold text-orange-500">32%</div>
            <div className="text-xs text-muted-foreground">400 tons CO₂</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
