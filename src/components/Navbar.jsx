import React from 'react'
import GooeyNav from '../animation/GooeyNav'

const items = [
  
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
]

const Navbar = () => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-auto">
      
      <div className="
        w-full
        sm:w-auto
        rounded-2xl
        border border-white/10
        bg-[#0d0b12]/55
        backdrop-blur-xs
        px-1.5 py-1.5
        sm:px-2 sm:py-2
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
      ">
        
        <GooeyNav items={items} particleCount={12} particleDistances={[60, 8]} particleR={70} initialActiveIndex={0} animationTime={500} timeVariance={250} colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />

      </div>
    </header>
  )
}

export default Navbar