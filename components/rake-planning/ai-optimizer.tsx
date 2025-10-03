"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, TrendingDown, Clock, Leaf, CheckCircle } from "lucide-react"

interface OptimizationPlan {
  id: number
  name: string
  cost: number
  eta: string
  co2: number
  utilization: number
  score: number
}

const optimizationPlans: OptimizationPlan[] = [
  {
    id: 1,
    name: "Cost Optimized",
    cost: 284700,
    eta: "14:30",
    co2: 124,
    utilization: 94,
    score: 95,
  },
  {
    id: 2,
    name: "Time Optimized",
    cost: 298500,
    eta: "12:45",
    co2: 132,
    utilization: 89,
    score: 88,
  },
  {
    id: 3,
    name: "Eco Optimized",
    cost: 291200,
    eta: "13:50",
    co2: 98,
    utilization: 92,
    score: 91,
  },
]

export function AIOptimizer() {
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [showPlans, setShowPlans] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null)

  const handleOptimize = () => {
    setIsOptimizing(true)
    setTimeout(() => {
      setIsOptimizing(false)
      setShowPlans(true)
    }, 2000)
  }

  const handleFinalize = (planId: number) => {
    setSelectedPlan(planId)
    // In production, this would apply the plan to the rake canvas
  }

  return (
    <Card className="h-[calc(100vh-220px)] flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          AI Optimization Hub
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto space-y-4">
        <Button onClick={handleOptimize} disabled={isOptimizing} className="w-full" size="lg">
          {isOptimizing ? (
            <>
              <Sparkles className="h-4 w-4 mr-2 animate-spin" />
              Optimizing...
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4 mr-2" />
              Run Optimizer
            </>
          )}
        </Button>

        {showPlans && (
          <div className="space-y-3">
            <div className="text-sm font-medium text-muted-foreground">Top 3 Recommended Plans</div>

            {optimizationPlans.map((plan) => (
              <div
                key={plan.id}
                className={`p-4 border rounded-lg transition-all ${
                  selectedPlan === plan.id
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-semibold text-foreground">{plan.name}</div>
                    <div className="text-xs text-muted-foreground">Plan #{plan.id}</div>
                  </div>
                  <Badge className="bg-primary">{plan.score}% Score</Badge>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <TrendingDown className="h-3 w-3" />
                      <span>Cost</span>
                    </div>
                    <span className="font-medium">₹{plan.cost.toLocaleString()}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>ETA</span>
                    </div>
                    <span className="font-medium">{plan.eta}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Leaf className="h-3 w-3" />
                      <span>CO₂</span>
                    </div>
                    <span className="font-medium">{plan.co2} tons</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <TrendingDown className="h-3 w-3" />
                      <span>Utilization</span>
                    </div>
                    <span className="font-medium">{plan.utilization}%</span>
                  </div>
                </div>

                <Button
                  onClick={() => handleFinalize(plan.id)}
                  variant={selectedPlan === plan.id ? "default" : "outline"}
                  size="sm"
                  className="w-full"
                >
                  {selectedPlan === plan.id ? (
                    <>
                      <CheckCircle className="h-3 w-3 mr-2" />
                      Selected
                    </>
                  ) : (
                    "Finalize & Dispatch"
                  )}
                </Button>
              </div>
            ))}
          </div>
        )}

        {!showPlans && !isOptimizing && (
          <div className="text-center py-8 text-muted-foreground">
            <Sparkles className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p className="text-sm">Click &quot;Run Optimizer&quot; to generate AI-powered rake plans</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
