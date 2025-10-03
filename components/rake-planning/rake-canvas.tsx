"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trash2, AlertCircle, CheckCircle, Package } from "lucide-react"

interface WagonLoad {
  orderId: string
  product: string
  quantity: number
  destination: string
}

interface Wagon {
  id: number
  type: "flatbed" | "boxcar" | "hopper"
  capacity: number
  load: WagonLoad | null
}

const initialWagons: Wagon[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  type: i % 3 === 0 ? "flatbed" : i % 3 === 1 ? "boxcar" : "hopper",
  capacity: 50,
  load: null,
}))

export function RakeCanvas() {
  const [wagons, setWagons] = useState<Wagon[]>(initialWagons)

  const handleDrop = (e: React.DragEvent, wagonId: number) => {
    e.preventDefault()
    const orderData = e.dataTransfer.getData("order")
    if (!orderData) return

    const order = JSON.parse(orderData)

    setWagons((prev) =>
      prev.map((wagon) =>
        wagon.id === wagonId
          ? {
              ...wagon,
              load: {
                orderId: order.id,
                product: order.product,
                quantity: order.quantity,
                destination: order.destination,
              },
            }
          : wagon,
      ),
    )
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const clearWagon = (wagonId: number) => {
    setWagons((prev) => prev.map((wagon) => (wagon.id === wagonId ? { ...wagon, load: null } : wagon)))
  }

  const clearAll = () => {
    setWagons(initialWagons)
  }

  const totalWeight = wagons.reduce((sum, wagon) => sum + (wagon.load?.quantity || 0), 0)
  const totalCapacity = wagons.length * 50
  const utilization = ((totalWeight / totalCapacity) * 100).toFixed(1)

  const getWagonColor = (wagon: Wagon) => {
    if (!wagon.load) return "bg-muted/30"
    const loadPercent = (wagon.load.quantity / wagon.capacity) * 100
    if (loadPercent > 100) return "bg-red-500/20 border-red-500"
    if (loadPercent > 80) return "bg-yellow-500/20 border-yellow-500"
    return "bg-green-500/20 border-green-500"
  }

  return (
    <Card className="h-[calc(100vh-220px)] flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Rake Building Canvas</CardTitle>
          <Button variant="outline" size="sm" onClick={clearAll}>
            <Trash2 className="h-4 w-4 mr-2" />
            Clear All
          </Button>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <div className="text-sm">
            <span className="text-muted-foreground">Total Weight:</span>
            <span className="font-semibold ml-2">{totalWeight} tons</span>
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Utilization:</span>
            <span className="font-semibold ml-2">{utilization}%</span>
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Wagons:</span>
            <span className="font-semibold ml-2">
              {wagons.filter((w) => w.load).length}/{wagons.length}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto">
        {/* Visual Train Layout */}
        <div className="space-y-4">
          {/* Locomotive */}
          <div className="flex items-center gap-2">
            <div className="w-full h-20 bg-primary/20 border-2 border-primary rounded-lg flex items-center justify-center">
              <span className="font-bold text-primary">LOCOMOTIVE</span>
            </div>
          </div>

          {/* Wagons Grid */}
          <div className="grid grid-cols-3 gap-3">
            {wagons.map((wagon) => (
              <div
                key={wagon.id}
                onDrop={(e) => handleDrop(e, wagon.id)}
                onDragOver={handleDragOver}
                className={`relative h-32 border-2 rounded-lg p-2 transition-all ${getWagonColor(wagon)} hover:border-primary/50`}
              >
                <div className="flex items-start justify-between mb-1">
                  <Badge variant="outline" className="text-xs">
                    W-{wagon.id}
                  </Badge>
                  {wagon.load && (
                    <button
                      onClick={() => clearWagon(wagon.id)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  )}
                </div>

                {wagon.load ? (
                  <div className="space-y-1">
                    <div className="text-xs font-semibold text-foreground">{wagon.load.orderId}</div>
                    <div className="text-xs text-muted-foreground">{wagon.load.product}</div>
                    <div className="text-xs font-medium">{wagon.load.quantity} tons</div>
                    <div className="text-xs text-muted-foreground">→ {wagon.load.destination}</div>
                    {wagon.load.quantity > wagon.capacity && (
                      <div className="flex items-center gap-1 text-red-500 text-xs">
                        <AlertCircle className="h-3 w-3" />
                        Overload!
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                    <Package className="h-6 w-6 mb-1 opacity-50" />
                    <span className="text-xs">Drop order here</span>
                    <span className="text-xs">{wagon.capacity}t capacity</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Validation Summary */}
          <div className="mt-4 p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-2 text-sm">
              {wagons.some((w) => w.load && w.load.quantity > w.capacity) ? (
                <>
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  <span className="text-red-500 font-medium">Warning: Some wagons are overloaded</span>
                </>
              ) : wagons.every((w) => w.load) ? (
                <>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-green-500 font-medium">All wagons loaded successfully</span>
                </>
              ) : (
                <>
                  <AlertCircle className="h-4 w-4 text-yellow-500" />
                  <span className="text-yellow-500 font-medium">
                    {wagons.filter((w) => !w.load).length} wagons still empty
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
