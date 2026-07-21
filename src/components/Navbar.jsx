import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#050816]/90 backdrop-blur-lg border-b border-cyan-500/20 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold text-cyan-400">
          Ravi<span className="text-white">Portfolio</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          {links.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-cyan-400 transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#111827] px-6 pb-4">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-3 text-gray-300 hover:text-cyan-400"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}