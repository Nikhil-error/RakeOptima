import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown } from "lucide-react"

const routes = [
  {
    rank: 1,
    origin: "Bhilai",
    destination: "Mumbai",
    distance: 1247,
    emissions: 187,
    trips: 24,
    trend: "up",
    change: 5.2,
  },
  {
    rank: 2,
    origin: "Rourkela",
    destination: "Delhi",
    distance: 1580,
    emissions: 165,
    trips: 18,
    trend: "down",
    change: -2.1,
  },
  {
    rank: 3,
    origin: "Bokaro",
    destination: "Chennai",
    distance: 1890,
    emissions: 158,
    trips: 15,
    trend: "up",
    change: 3.8,
  },
  {
    rank: 4,
    origin: "Durgapur",
    destination: "Bangalore",
    distance: 1654,
    emissions: 142,
    trips: 16,
    trend: "down",
    change: -4.5,
  },
  {
    rank: 5,
    origin: "Bhilai",
    destination: "Kolkata",
    distance: 1123,
    emissions: 128,
    trips: 21,
    trend: "down",
    change: -1.8,
  },
  {
    rank: 6,
    origin: "Rourkela",
    destination: "Ahmedabad",
    distance: 1456,
    emissions: 118,
    trips: 14,
    trend: "up",
    change: 2.3,
  },
  {
    rank: 7,
    origin: "Bokaro",
    destination: "Hyderabad",
    distance: 1342,
    emissions: 105,
    trips: 13,
    trend: "down",
    change: -3.2,
  },
  {
    rank: 8,
    origin: "Durgapur",
    destination: "Pune",
    distance: 1589,
    emissions: 98,
    trips: 11,
    trend: "up",
    change: 1.5,
  },
  {
    rank: 9,
    origin: "Bhilai",
    destination: "Surat",
    distance: 1234,
    emissions: 92,
    trips: 12,
    trend: "down",
    change: -2.7,
  },
  {
    rank: 10,
    origin: "Rourkela",
    destination: "Jaipur",
    distance: 1398,
    emissions: 87,
    trips: 10,
    trend: "down",
    change: -5.1,
  },
]

export function CarbonIntensiveRoutes() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 10 Carbon-Intensive Routes</CardTitle>
        <p className="text-sm text-muted-foreground">Routes with highest CO₂ emissions this month</p>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">Rank</TableHead>
                <TableHead>Origin</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead className="text-right">Distance (km)</TableHead>
                <TableHead className="text-right">CO₂ (tons)</TableHead>
                <TableHead className="text-right">Trips</TableHead>
                <TableHead className="text-right">Trend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {routes.map((route) => (
                <TableRow key={route.rank}>
                  <TableCell>
                    <Badge variant="outline" className="font-mono">
                      #{route.rank}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{route.origin}</TableCell>
                  <TableCell>{route.destination}</TableCell>
                  <TableCell className="text-right">{route.distance.toLocaleString()}</TableCell>
                  <TableCell className="text-right font-semibold">{route.emissions}</TableCell>
                  <TableCell className="text-right">{route.trips}</TableCell>
                  <TableCell className="text-right">
                    <div
                      className={`flex items-center justify-end gap-1 ${route.trend === "up" ? "text-red-500" : "text-green-500"}`}
                    >
                      {route.trend === "up" ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                      <span className="text-sm font-medium">{Math.abs(route.change)}%</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
