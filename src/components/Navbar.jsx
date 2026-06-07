import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  const links = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Journey", href: "#timeline", id: "timeline" },
    { name: "Growth", href: "#growth", id: "growth" },
    { name: "Evidence", href: "#evidence", id: "evidence" },
    { name: "Conclusion", href: "#conclusion", id: "conclusion" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop - 180;
          const bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-5 py-3 hidden md:block">
      <div className="flex gap-3 text-sm">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={`transition px-4 py-2 rounded-full ${
              active === link.id
                ? "bg-cyan-400 text-black font-semibold"
                : "text-gray-300 hover:text-cyan-400"
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;