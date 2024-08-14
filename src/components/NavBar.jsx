import { useState } from "react";
import logoURL from "../assets/logo.png";
import MobileMenu from "./MobileMenu";
import { useScroll, useMotionValueEvent } from "framer-motion";

const NavBar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0 && !scrolled) {
      setScrolled(true);
    } else if (latest === 0 && scrolled) {
      setScrolled(false);
    }
  });

  const defaultClasses = "transition-all absolute inset-0 -z-1";
  const navBarClasses = scrolled
    ? `${defaultClasses} border-b border-black bg-white/75 backdrop-blur-lg`
    : `${defaultClasses} bg-transparent`;

  // Native smooth scroll to section
  const smoothScrollTo = (id, event) => {
    event.preventDefault(); // Prevent default link behavior
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container sticky inset-x-0 top-0 z-30">
      <div className={navBarClasses}></div>
      <div className="flex items-center justify-between relative">
        <div>
          <img src={logoURL} alt="logo" className="h-20 w-20" />
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center flex-row space-x-4 p-4 ml-24">
            <li>
              <a
                href="#testimonials"
                onClick={(e) => smoothScrollTo("#testimonials", e)}
                className="text-gray-600"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#features"
                onClick={(e) => smoothScrollTo("#features", e)}
              >
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={(e) => smoothScrollTo("#pricing", e)}>
                Pricing
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <a
            href="#"
            className="bg-black mx-4 px-4 py-2 rounded-md text-white cursor-pointer"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-black px-4 py-2 rounded-md text-white cursor-pointer"
          >
            Sign up
          </a>
        </div>
        <MobileMenu />
      </div>
    </div>
  );
};

export default NavBar;
