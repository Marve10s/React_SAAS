import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavItems = [
  {
    title: "About Us",
    url: "/",
  },
  {
    title: "Features",
    url: "/",
  },
  {
    title: "Pricing",
    url: "/",
  },
  {
    title: "Sign In",
    url: "/",
  },
  {
    title: "Sign Up",
    url: "/",
  },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="block md:hidden">
      {!isOpen ? (
        <button onClick={() => setIsOpen(true)}>
          <Menu size={32} />
        </button>
      ) : (
        <>
          <button onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
          <div className="absolute left-0 w-full top-20 bg-white/60 backdrop-blur-lg border-b border-t ">
            <ul className="flex flex-col py-4 items-center">
              {NavItems.map((item, index) => (
                <li key={index} className="border-b border-gray-200">
                  <a
                    href={item.url}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
