import { Link } from "react-router";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-cream border-b border-black px-20 py-6">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="font-light text-[15px] tracking-tight"
        >
          Āre Studio
        </Link>

        <div className="flex items-center gap-12">
          <Link
            to="/"
            className="font-normal text-[15px] tracking-tight hover:opacity-60 transition-opacity"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-normal text-[15px] tracking-tight hover:opacity-60 transition-opacity"
          >
            About
          </Link>
          <Link
            to="/magazine"
            className="font-normal text-[15px] tracking-tight hover:opacity-60 transition-opacity"
          >
            Magazine & Lookbook
          </Link>
          <Link
            to="/product"
            className="font-normal text-[15px] tracking-tight hover:opacity-60 transition-opacity"
          >
            Shop
          </Link>
        </div>
      </div>
    </nav>
  );
}
