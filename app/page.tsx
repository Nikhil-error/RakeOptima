"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RakeOptimaLogo } from "@/components/logos/rakeoptima-logo"
import { SAILLogo } from "@/components/logos/sail-logo"
import { ArrowRight, BarChart3, Zap, Leaf, MapPin, TrendingUp, Shield, CheckCircle2, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blueprint grid overlay */}
        <div className="absolute inset-0 blueprint-grid opacity-20" />

        {/* Animated gradient orbs */}
        <div
          className="absolute top-20 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-20 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "4s" }}
        />

        {/* Enhanced animated light trails with parallax */}
        <div
          className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"
          style={{
            transform: `translateX(${scrollY * 0.5}px)`,
            animation: "pulse 3s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-25"
          style={{
            transform: `translateX(${-scrollY * 0.3}px)`,
            animation: "pulse 4s ease-in-out infinite 1s",
          }}
        />
        <div
          className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"
          style={{
            transform: `translateX(${scrollY * 0.4}px)`,
            animation: "pulse 5s ease-in-out infinite 2s",
          }}
        />

        {/* Floating geometric shapes */}
        <div
          className="absolute top-1/4 left-1/4 w-4 h-4 border-2 border-primary/30 rotate-45 animate-bounce"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-6 h-6 border-2 border-accent/30 animate-bounce"
          style={{ animationDuration: "8s", animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-500/20 rounded-full animate-bounce"
          style={{ animationDuration: "7s", animationDelay: "2s" }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-4 md:gap-8">
              <RakeOptimaLogo />
              <div className="hidden sm:block h-8 w-px bg-border" />
              <SAILLogo />
            </div>
            <Link href="/login">
              <Button className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all hover:scale-105">
                Login
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 md:mb-8 animate-pulse">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">AI-Powered Logistics Platform</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-balance">
            <span className="text-foreground">Revolutionize</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent animate-pulse">
              Freight Logistics
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto text-pretty">
            AI-powered rake optimization, real-time tracking, and sustainability insights for SAIL's freight operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-semibold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-2xl shadow-accent/30 hover:shadow-accent/50 hover:scale-105 transition-all"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-border/50 hover:bg-card/50 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-transparent hover:border-primary/50 hover:scale-105 transition-all"
            >
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="mt-12 md:mt-20 relative w-full max-w-5xl mx-auto h-48 md:h-64 opacity-40 hover:opacity-60 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 blur-2xl" />
          <svg viewBox="0 0 800 300" className="w-full h-full relative z-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Train body outline */}
            <rect
              x="50"
              y="50"
              width="700"
              height="150"
              fill="none"
              stroke="rgb(59, 130, 246)"
              strokeWidth="2"
              filter="url(#glow)"
            />
            <rect x="70" y="70" width="150" height="110" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="1.5" />
            <rect x="240" y="70" width="150" height="110" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="1.5" />
            <rect x="410" y="70" width="150" height="110" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="1.5" />
            <rect
              x="580"
              y="70"
              width="150"
              height="110"
              fill="none"
              stroke="rgb(249, 115, 22)"
              strokeWidth="2"
              filter="url(#glow)"
            />

            {/* Wheels */}
            <circle cx="130" cy="210" r="20" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="2" />
            <circle cx="190" cy="210" r="20" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="2" />
            <circle cx="310" cy="210" r="20" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="2" />
            <circle cx="370" cy="210" r="20" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="2" />
            <circle cx="490" cy="210" r="20" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="2" />
            <circle cx="550" cy="210" r="20" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="2" />
            <circle
              cx="650"
              cy="210"
              r="20"
              fill="none"
              stroke="rgb(249, 115, 22)"
              strokeWidth="2"
              filter="url(#glow)"
            />
            <circle
              cx="710"
              cy="210"
              r="20"
              fill="none"
              stroke="rgb(249, 115, 22)"
              strokeWidth="2"
              filter="url(#glow)"
            />

            {/* Detail lines */}
            <line x1="70" y1="100" x2="220" y2="100" stroke="rgb(59, 130, 246)" strokeWidth="1" opacity="0.5" />
            <line x1="240" y1="100" x2="390" y2="100" stroke="rgb(59, 130, 246)" strokeWidth="1" opacity="0.5" />
            <line x1="410" y1="100" x2="560" y2="100" stroke="rgb(59, 130, 246)" strokeWidth="1" opacity="0.5" />
            <line x1="580" y1="100" x2="730" y2="100" stroke="rgb(249, 115, 22)" strokeWidth="1" opacity="0.5" />
          </svg>
        </div>
      </section>

      <section className="relative z-10 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:scale-105 transition-all">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm md:text-base text-muted-foreground">Active Rakes</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-accent/50 hover:scale-105 transition-all">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2">98%</div>
              <div className="text-sm md:text-base text-muted-foreground">On-Time Rate</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-green-500/50 hover:scale-105 transition-all">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-500 mb-2">70%</div>
              <div className="text-sm md:text-base text-muted-foreground">CO₂ Reduction</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-blue-500/50 hover:scale-105 transition-all">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 mb-2">24/7</div>
              <div className="text-sm md:text-base text-muted-foreground">Live Tracking</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 bg-card/30 backdrop-blur-sm border-y border-border/50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="text-foreground">Powerful</span>{" "}
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Everything you need to optimize freight operations and drive efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 md:p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <Zap className="h-6 w-6 md:h-7 md:w-7 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors">
                AI Optimization
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Intelligent rake planning with AI-powered optimization for maximum efficiency and cost savings
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 md:p-8 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                <MapPin className="h-6 w-6 md:h-7 md:w-7 text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-accent transition-colors">
                Real-Time Tracking
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Monitor all rakes across India with live GPS tracking and instant status updates
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 md:p-8 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-green-500/20 group-hover:scale-110 transition-all">
                <Leaf className="h-6 w-6 md:h-7 md:w-7 text-green-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-green-500 transition-colors">
                Sustainability
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Track CO₂ emissions and environmental impact with comprehensive sustainability metrics
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 md:p-8 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all">
                <BarChart3 className="h-6 w-6 md:h-7 md:w-7 text-blue-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-blue-500 transition-colors">
                Analytics Dashboard
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Comprehensive insights with KPIs, trends, and performance metrics at your fingertips
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 md:p-8 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all">
                <TrendingUp className="h-6 w-6 md:h-7 md:w-7 text-purple-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-purple-500 transition-colors">
                Performance Metrics
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Monitor utilization rates, dispatch times, and freight costs with detailed analytics
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 md:p-8 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-red-500/20 group-hover:scale-110 transition-all">
                <Shield className="h-6 w-6 md:h-7 md:w-7 text-red-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-red-500 transition-colors">
                Enterprise Security
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Role-based access control and secure data management for enterprise-grade operations
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                <span className="text-foreground">Why Choose</span>{" "}
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  RakeOptima?
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex gap-4 p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Reduce Operational Costs</h3>
                  <p className="text-sm text-muted-foreground">
                    Save up to 30% on freight costs through AI-optimized rake planning and route optimization
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-accent/50 hover:shadow-lg transition-all">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Improve Efficiency</h3>
                  <p className="text-sm text-muted-foreground">
                    Increase rake utilization rates and reduce idle time with intelligent scheduling
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-green-500/50 hover:shadow-lg transition-all">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Environmental Impact</h3>
                  <p className="text-sm text-muted-foreground">
                    Track and reduce CO₂ emissions with comprehensive sustainability reporting
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-blue-500/50 hover:shadow-lg transition-all">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Real-Time Visibility</h3>
                  <p className="text-sm text-muted-foreground">
                    Monitor all operations with live tracking and instant alerts for delays or issues
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-blue-500 rounded-2xl blur-xl opacity-20" />
            <div className="relative bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                <span className="text-foreground">Ready to</span>{" "}
                <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
                  Optimize?
                </span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto text-pretty">
                Join SAIL's digital transformation and experience the future of freight logistics management
              </p>
              <Link href="/login">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white font-semibold text-base md:text-lg px-8 md:px-10 py-5 md:py-6 shadow-2xl shadow-accent/30 hover:shadow-accent/50 hover:scale-105 transition-all"
                >
                  Access RakeOptima
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 bg-card/30 backdrop-blur-sm py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 md:gap-8">
              <RakeOptimaLogo />
              <div className="hidden sm:block h-8 w-px bg-border" />
              <SAILLogo />
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground text-center md:text-right">
              © 2025 Steel Authority of India Limited. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
