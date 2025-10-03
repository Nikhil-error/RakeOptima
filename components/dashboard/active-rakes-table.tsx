"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const activeRakes = [
  {
    id: "RK-2401",
    origin: "Bhilai Steel Plant",
    destination: "Delhi NCR",
    status: "In Transit",
    progress: 65,
    eta: "14:30",
  },
  {
    id: "RK-2402",
    origin: "Rourkela Steel Plant",
    destination: "Mumbai Port",
    status: "Delayed",
    progress: 42,
    eta: "18:45",
  },
  {
    id: "RK-2403",
    origin: "Durgapur Steel Plant",
    destination: "Kolkata Hub",
    status: "In Transit",
    progress: 88,
    eta: "11:20",
  },
  {
    id: "RK-2404",
    origin: "Bokaro Steel Plant",
    destination: "Chennai Port",
    status: "Loading",
    progress: 15,
    eta: "09:00",
  },
  {
    id: "RK-2405",
    origin: "Bhilai Steel Plant",
    destination: "Ahmedabad",
    status: "In Transit",
    progress: 55,
    eta: "16:15",
  },
  {
    id: "RK-2406",
    origin: "Rourkela Steel Plant",
    destination: "Bangalore",
    status: "In Transit",
    progress: 72,
    eta: "13:40",
  },
]

export function ActiveRakesTable() {
  return (
    <div className="rounded-md border border-border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="whitespace-nowrap">Rake ID</TableHead>
            <TableHead className="whitespace-nowrap">Origin</TableHead>
            <TableHead className="whitespace-nowrap">Destination</TableHead>
            <TableHead className="whitespace-nowrap">Status</TableHead>
            <TableHead className="hidden sm:table-cell whitespace-nowrap">Progress</TableHead>
            <TableHead className="whitespace-nowrap">ETA</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activeRakes.map((rake) => (
            <TableRow key={rake.id}>
              <TableCell className="font-medium whitespace-nowrap">{rake.id}</TableCell>
              <TableCell className="max-w-[120px] sm:max-w-none truncate">{rake.origin}</TableCell>
              <TableCell className="max-w-[120px] sm:max-w-none truncate">{rake.destination}</TableCell>
              <TableCell>
                <Badge
                  variant={rake.status === "Delayed" ? "destructive" : "default"}
                  className={
                    rake.status === "In Transit" ? "bg-green-500" : rake.status === "Loading" ? "bg-yellow-500" : ""
                  }
                >
                  {rake.status}
                </Badge>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <div className="flex items-center gap-2">
                  <Progress value={rake.progress} className="w-20 md:w-24" />
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{rake.progress}%</span>
                </div>
              </TableCell>
              <TableCell className="whitespace-nowrap">{rake.eta}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
