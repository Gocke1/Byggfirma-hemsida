import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const parts = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="bg-neutralBg border-b border-neutralLine">
      <div className="max-w-7xl mx-auto px-6 py-3 text-sm text-neutralText">
        <Link to="/" className="hover:text-primary">
          Hem
        </Link>
        {parts.map((part, i) => {
          const path = "/" + parts.slice(0, i + 1).join("/");
          const label = part === "tjanster" ? "Våra tjänster" : 
                        part === "om-oss" ? "Om oss" :
                        part === "kontakt" ? "Kontakt" :
                        part;
          return (
            <span key={path}>
              {" / "}
              <Link to={path} className="hover:text-primary">
                {label}
              </Link>
            </span>
          );
        })}
      </div>
    </nav>
  );
}
