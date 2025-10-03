"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

interface Rake {
  id: string
  lat: number
  lng: number
  status: "on-time" | "delayed" | "loading"
  origin: string
  destination: string
  cargo: string
  eta: string
  progress: number
}

const rakes: Rake[] = [
  {
    id: "RK-2401",
    lat: 28.6,
    lng: 77.2,
    status: "on-time",
    origin: "Bhilai",
    destination: "Delhi",
    cargo: "Steel Coils - 2,400 tons",
    eta: "14:30 Today",
    progress: 65,
  },
  {
    id: "RK-2402",
    lat: 19.0,
    lng: 72.8,
    status: "delayed",
    origin: "Rourkela",
    destination: "Mumbai",
    cargo: "Steel Plates - 1,800 tons",
    eta: "18:45 Today",
    progress: 42,
  },
  {
    id: "RK-2403",
    lat: 22.5,
    lng: 88.3,
    status: "on-time",
    origin: "Durgapur",
    destination: "Kolkata",
    cargo: "Steel Rods - 2,100 tons",
    eta: "11:20 Today",
    progress: 88,
  },
  {
    id: "RK-2404",
    lat: 13.0,
    lng: 80.2,
    status: "loading",
    origin: "Bokaro",
    destination: "Chennai",
    cargo: "Steel Sheets - 2,600 tons",
    eta: "Tomorrow 09:00",
    progress: 15,
  },
  {
    id: "RK-2405",
    lat: 23.0,
    lng: 72.5,
    status: "on-time",
    origin: "Bhilai",
    destination: "Ahmedabad",
    cargo: "Steel Billets - 2,200 tons",
    eta: "16:15 Today",
    progress: 55,
  },
]

export function RakeMap() {
  const [selectedRake, setSelectedRake] = useState<Rake | null>(null)

  const getStatusColor = (status: Rake["status"]) => {
    switch (status) {
      case "on-time":
        return "rgb(34, 197, 94)"
      case "delayed":
        return "rgb(239, 68, 68)"
      case "loading":
        return "rgb(251, 191, 36)"
      default:
        return "rgb(59, 130, 246)"
    }
  }

  return (
    <>
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-muted/20 rounded-lg border border-border overflow-hidden">
        {/* Simplified India map outline */}
        <svg viewBox="0 0 800 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* India outline (simplified) */}
          <path
            d="M 400 50 L 450 100 L 480 150 L 500 200 L 510 250 L 520 300 L 510 350 L 490 400 L 460 450 L 420 480 L 380 490 L 340 480 L 300 450 L 270 400 L 250 350 L 240 300 L 250 250 L 270 200 L 300 150 L 340 100 L 380 70 Z"
            fill="none"
            stroke="rgb(59, 130, 246)"
            strokeWidth="2"
            opacity="0.3"
          />

          {/* Route lines */}
          <line x1="300" y1="250" x2="450" y2="150" stroke="rgb(59, 130, 246)" strokeWidth="1" opacity="0.2" />
          <line x1="280" y1="280" x2="380" y2="380" stroke="rgb(59, 130, 246)" strokeWidth="1" opacity="0.2" />
          <line x1="320" y1="300" x2="480" y2="320" stroke="rgb(59, 130, 246)" strokeWidth="1" opacity="0.2" />

          {/* Rake markers */}
          {rakes.map((rake) => (
            <g
              key={rake.id}
              transform={`translate(${rake.lng * 5}, ${rake.lat * 15})`}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setSelectedRake(rake)}
            >
              <circle cx="0" cy="0" r="8" fill={getStatusColor(rake.status)} opacity="0.3" className="animate-ping" />
              <circle cx="0" cy="0" r="6" fill={getStatusColor(rake.status)} />
              <text x="12" y="5" fontSize="10" className="text-[10px] sm:text-xs" fill="currentColor">
                {rake.id}
              </text>
            </g>
          ))}
        </svg>

        <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-2 sm:p-3 space-y-1 sm:space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 flex-shrink-0" />
            <span className="text-[10px] sm:text-xs text-foreground">On Time</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 flex-shrink-0" />
            <span className="text-[10px] sm:text-xs text-foreground">Delayed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 flex-shrink-0" />
            <span className="text-[10px] sm:text-xs text-foreground">Loading</span>
          </div>
        </div>
      </div>

      {/* Rake Details Modal */}
      <Dialog open={!!selectedRake} onOpenChange={() => setSelectedRake(null)}>
        <DialogContent className="max-w-[90vw] sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <span>Rake Details: {selectedRake?.id}</span>
              <Badge
                variant={selectedRake?.status === "on-time" ? "default" : "destructive"}
                className={
                  selectedRake?.status === "on-time"
                    ? "bg-green-500"
                    : selectedRake?.status === "loading"
                      ? "bg-yellow-500"
                      : ""
                }
              >
                {selectedRake?.status.toUpperCase()}
              </Badge>
            </DialogTitle>
          </DialogHeader>
          {selectedRake && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Origin</div>
                  <div className="font-medium">{selectedRake.origin}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Destination</div>
                  <div className="font-medium">{selectedRake.destination}</div>
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Cargo</div>
                <div className="font-medium">{selectedRake.cargo}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Estimated Arrival</div>
                <div className="font-medium">{selectedRake.eta}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Progress</div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${selectedRake.progress}%` }}
                  />
                </div>
                <div className="text-sm text-right mt-1">{selectedRake.progress}%</div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
