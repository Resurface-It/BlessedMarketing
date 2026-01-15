export function LogoGrid() {
  // Placeholder logos - replace with actual client logos
  const logos = Array.from({ length: 6 }, (_, i) => i)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
      {logos.map((logo) => (
        <div
          key={logo}
          className="w-full h-12 bg-bg-elevated rounded-md flex items-center justify-center border border-border"
          role="img"
          aria-label={`Client logo ${logo + 1}`}
        >
          <div className="text-text-muted text-tiny">Logo {logo + 1}</div>
        </div>
      ))}
    </div>
  )
}

