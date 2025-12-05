export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center relative">
      {/* Logo in top left corner */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 flex flex-col items-start gap-0.5">
        <div className="w-8 h-8 relative">
          <img src="/renor-logo.png" alt="Renor Logo" className="w-full h-full object-contain" />
        </div>
        <div className="h-[2.5px] w-7 ml-0.5 mb-1 bg-gradient-to-r from-[#ff4d00] via-[#ffea00] to-[#0066ff]" />
      </div>
      
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-medium mb-4 text-[#262626] uppercase">
          CRAFTING THE EXPERIENCE
        </h1>
        <p className="text-xl md:text-2xl font-normal text-[#262626] lowercase">
          coming soon
        </p>
      </div>
    </main>
  )
}
