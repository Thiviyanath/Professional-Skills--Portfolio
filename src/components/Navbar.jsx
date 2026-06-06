import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  const links = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Overview", href: "#overview", id: "overview" },
    { name: "Team", href: "#lecturers", id: "lecturers" },
    { name: "Journey", href: "#timeline", id: "timeline" },
    { name: "Reflections", href: "#reflections", id: "reflections" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Viva", href: "#viva", id: "viva" },
    { name: "Evidence", href: "#evidence", id: "evidence" },
    { name: "Highlights", href: "#highlights", id: "highlights" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop - 160;
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
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-6 py-3 hidden md:block">
      <div className="flex gap-5 text-sm">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={`transition px-3 py-1 rounded-full ${
              active === link.id
                ? "bg-cyan-400 text-black"
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