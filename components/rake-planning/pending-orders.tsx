"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Package } from "lucide-react"

interface Order {
  id: string
  product: string
  quantity: number
  destination: string
  dueDate: string
  priority: "high" | "medium" | "low"
}

const orders: Order[] = [
  {
    id: "ORD-1001",
    product: "Steel Coils",
    quantity: 450,
    destination: "Delhi NCR",
    dueDate: "2025-03-15",
    priority: "high",
  },
  {
    id: "ORD-1002",
    product: "Steel Plates",
    quantity: 320,
    destination: "Mumbai",
    dueDate: "2025-03-16",
    priority: "medium",
  },
  {
    id: "ORD-1003",
    product: "Steel Rods",
    quantity: 280,
    destination: "Kolkata",
    dueDate: "2025-03-14",
    priority: "high",
  },
  {
    id: "ORD-1004",
    product: "Steel Sheets",
    quantity: 380,
    destination: "Chennai",
    dueDate: "2025-03-18",
    priority: "low",
  },
  {
    id: "ORD-1005",
    product: "Steel Billets",
    quantity: 420,
    destination: "Ahmedabad",
    dueDate: "2025-03-15",
    priority: "medium",
  },
  {
    id: "ORD-1006",
    product: "Steel Beams",
    quantity: 350,
    destination: "Bangalore",
    dueDate: "2025-03-17",
    priority: "medium",
  },
]

export function PendingOrders() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredOrders = orders.filter(
    (order) =>
      order.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getPriorityColor = (priority: Order["priority"]) => {
    switch (priority) {
      case "high":
        return "bg-red-500"
      case "medium":
        return "bg-yellow-500"
      case "low":
        return "bg-green-500"
      default:
        return "bg-blue-500"
    }
  }

  const handleDragStart = (e: React.DragEvent, order: Order) => {
    e.dataTransfer.setData("order", JSON.stringify(order))
  }

  return (
    <Card className="h-[calc(100vh-220px)] flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">Pending Orders</CardTitle>
        <div className="relative mt-2">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search orders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto space-y-3">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            draggable
            onDragStart={(e) => handleDragStart(e, order)}
            className="p-3 border border-border rounded-lg bg-card hover:bg-accent/50 cursor-move transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium text-sm">{order.id}</span>
              </div>
              <Badge className={getPriorityColor(order.priority)}>{order.priority}</Badge>
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-foreground">{order.product}</div>
              <div className="text-sm text-muted-foreground">{order.quantity} tons</div>
              <div className="text-sm text-muted-foreground">To: {order.destination}</div>
              <div className="text-xs text-muted-foreground">Due: {order.dueDate}</div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
