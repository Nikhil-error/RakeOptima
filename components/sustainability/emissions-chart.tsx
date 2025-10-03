"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const emissionsData = [
  { month: "Jan", emissions: 1450 },
  { month: "Feb", emissions: 1420 },
  { month: "Mar", emissions: 1380 },
  { month: "Apr", emissions: 1340 },
  { month: "May", emissions: 1300 },
  { month: "Jun", emissions: 1270 },
  { month: "Jul", emissions: 1247 },
]

export function EmissionsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>CO₂ Emissions Over Time</CardTitle>
        <p className="text-sm text-muted-foreground">Monthly carbon emissions in tons</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={emissionsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
            />
            <Bar dataKey="emissions" fill="rgb(34, 197, 94)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 flex items-center justify-between text-sm">
          <div>
            <span className="text-muted-foreground">Total Reduction:</span>
            <span className="font-semibold ml-2 text-green-500">-14.0%</span>
          </div>
          <div>
            <span className="text-muted-foreground">This Month:</span>
            <span className="font-semibold ml-2">1,247 tons</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
