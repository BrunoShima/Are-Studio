import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-black px-6 md:px-20 py-8 mt-auto">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
        <Link to="/" className="font-light text-[15px] tracking-tight" onClick={() => window.scrollTo(0, 0)}>Āre Studio</Link>
        <div className="font-medium text-[10px] tracking-[1.5px] uppercase">
          Vancouver, BC — Est. 2026
        </div>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="font-light text-[15px] tracking-tight">@arestudio</a>
      </div>
    </footer>
  )
}
