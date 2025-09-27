import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition
     ${isActive
        ? "text-neutralDark font-semibold underline underline-offset-4 decoration-2"
        : "text-neutralText hover:text-primary"}`;

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/70 backdrop-blur-md ring-1 ring-black/10 border-b border-site/30">
      <nav className="fixed top-0 w-full z-50 bg-site shadow">
        <NavLink to="/" className="font-extrabold text-lg tracking-tight text-neutralDark">
          Construere <span className="text-primary">Bygg</span>
        </NavLink>

        <div className="hidden sm:flex items-center gap-2">
          <NavLink to="/" className={linkClass}>Hem</NavLink>
          <NavLink to="/tjanster" className={linkClass}>Våra tjänster</NavLink>
          <NavLink to="/om-oss" className={linkClass}>Om oss</NavLink>
          <NavLink to="/kontakt" className={linkClass}>Kontakt</NavLink>
        </div>
      </nav>
    </header>
  );
}
