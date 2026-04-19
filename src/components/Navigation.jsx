import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <nav className="sticky top-0 z-50 bg-cream border-b border-black px-6 md:px-20 py-6">
      <div className="flex items-center justify-between">
        <Link to="/" className="font-normal text-[20px] tracking-tight" onClick={close}>
          Āre Studio
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-12">
          <Link to="/" className="font-normal text-[15px] tracking-tight hover:opacity-60 transition-opacity">
            Home
          </Link>
          <Link to="/about" className="font-normal text-[15px] tracking-tight hover:opacity-60 transition-opacity">
            About
          </Link>
          <Link to="/magazine" className="font-normal text-[15px] tracking-tight hover:opacity-60 transition-opacity">
            Magazine
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-[32px] leading-none select-none p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '×' : '≡'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-6 pt-6 pb-2">
          <Link to="/" className="font-normal text-[15px] tracking-tight" onClick={close}>Home</Link>
          <Link to="/about" className="font-normal text-[15px] tracking-tight" onClick={close}>About</Link>
          <Link to="/magazine" className="font-normal text-[15px] tracking-tight" onClick={close}>Magazine</Link>
        </div>
      )}
    </nav>
  )
}
