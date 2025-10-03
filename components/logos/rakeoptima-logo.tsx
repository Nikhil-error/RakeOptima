export function RakeOptimaLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-10 h-10">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stylized train/rake icon */}
          <rect
            x="4"
            y="12"
            width="32"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
          />
          <rect x="8" y="16" width="6" height="8" fill="currentColor" className="text-primary" />
          <rect x="17" y="16" width="6" height="8" fill="currentColor" className="text-primary" />
          <rect x="26" y="16" width="6" height="8" fill="currentColor" className="text-primary" />
          <circle cx="12" cy="32" r="3" fill="currentColor" className="text-accent" />
          <circle cx="28" cy="32" r="3" fill="currentColor" className="text-accent" />
        </svg>
      </div>
      <div>
        <div className="text-xl font-bold text-foreground">RakeOptima</div>
        <div className="text-xs text-muted-foreground">Logistics Platform</div>
      </div>
    </div>
  )
}
