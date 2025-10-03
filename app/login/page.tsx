import { LoginForm } from "@/components/login-form"
import { RakeOptimaLogo } from "@/components/logos/rakeoptima-logo"
import { SAILLogo } from "@/components/logos/sail-logo"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />

      {/* Animated light trails */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 animate-pulse"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute top-2/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-20 animate-pulse"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        />
      </div>

      {/* Freight train wireframe illustration */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-96 opacity-20">
        <svg viewBox="0 0 800 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Train body outline */}
          <rect x="100" y="100" width="600" height="200" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="2" />
          <rect x="120" y="120" width="150" height="160" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="1.5" />
          <rect x="290" y="120" width="150" height="160" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="1.5" />
          <rect x="460" y="120" width="150" height="160" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="1.5" />
          <rect x="630" y="120" width="50" height="160" fill="none" stroke="rgb(249, 115, 22)" strokeWidth="2" />

          {/* Wheels */}
          <circle cx="180" cy="310" r="25" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="2" />
          <circle cx="250" cy="310" r="25" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="2" />
          <circle cx="360" cy="310" r="25" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="2" />
          <circle cx="430" cy="310" r="25" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="2" />
          <circle cx="540" cy="310" r="25" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="2" />
          <circle cx="610" cy="310" r="25" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="2" />

          {/* Detail lines */}
          <line x1="120" y1="150" x2="270" y2="150" stroke="rgb(59, 130, 246)" strokeWidth="1" opacity="0.5" />
          <line x1="290" y1="150" x2="440" y2="150" stroke="rgb(59, 130, 246)" strokeWidth="1" opacity="0.5" />
          <line x1="460" y1="150" x2="610" y2="150" stroke="rgb(59, 130, 246)" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Left side - Branding */}
        <div className="flex-1 flex flex-col justify-between p-6 md:p-12">
          <div>
            <Link href="/">
              <Button variant="ghost" className="mb-6 md:mb-8 -ml-4 hover:bg-card/50">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <RakeOptimaLogo />
              <div className="hidden sm:block h-12 w-px bg-border" />
              <SAILLogo />
            </div>
          </div>

          <div className="max-w-2xl my-8 lg:my-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance">
              <span className="text-foreground">Unified</span>
              <br />
              <span className="text-foreground">Logistics</span>
              <br />
              <span className="text-primary">Platform</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Unlock unequalled business performance with real-time insights, automation, an expanding marketplace, and
              digital payments. Join the logistics revolution in the making.
            </p>
          </div>

          <div className="text-xs sm:text-sm text-muted-foreground">
            © 2025 Steel Authority of India Limited. All rights reserved.
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="w-full lg:max-w-md flex items-center justify-center p-6 md:p-12">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
