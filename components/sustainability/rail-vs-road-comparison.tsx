import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingDown, Truck, Train } from "lucide-react"

export function RailVsRoadComparison() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rail vs Road Transport Comparison</CardTitle>
        <p className="text-sm text-muted-foreground">Environmental impact analysis for current month</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Rail Transport */}
          <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
            <div className="flex items-center gap-2 mb-3">
              <Train className="h-5 w-5 text-green-500" />
              <span className="font-semibold text-foreground">Rail Transport</span>
            </div>
            <div className="space-y-2">
              <div>
                <div className="text-sm text-muted-foreground">Total CO₂ Emissions</div>
                <div className="text-2xl font-bold text-green-500">1,247 tons</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Freight Moved</div>
                <div className="text-lg font-semibold">24,500 tons</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Efficiency</div>
                <div className="text-lg font-semibold">50.9 g/ton-km</div>
              </div>
            </div>
          </div>

          {/* Road Transport (Hypothetical) */}
          <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/20">
            <div className="flex items-center gap-2 mb-3">
              <Truck className="h-5 w-5 text-red-500" />
              <span className="font-semibold text-foreground">Road Transport</span>
              <span className="text-xs text-muted-foreground">(if used)</span>
            </div>
            <div className="space-y-2">
              <div>
                <div className="text-sm text-muted-foreground">Estimated CO₂</div>
                <div className="text-2xl font-bold text-red-500">4,165 tons</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Freight Moved</div>
                <div className="text-lg font-semibold">24,500 tons</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Efficiency</div>
                <div className="text-lg font-semibold">170 g/ton-km</div>
              </div>
            </div>
          </div>

          {/* Savings */}
          <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <TrendingDown className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">CO₂ Saved</span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-4xl font-bold text-primary">2,918 tons</div>
                <div className="text-sm text-muted-foreground">by using rail transport</div>
              </div>
              <div className="pt-3 border-t border-border">
                <div className="text-sm text-muted-foreground">Reduction</div>
                <div className="text-2xl font-bold text-green-500">70.1%</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
