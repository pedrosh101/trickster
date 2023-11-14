// components/NavToggle.tsx
import { useState, useRef, MouseEvent } from "react";

const NavToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navRef.current &&
      !(navRef.current as Node).contains(event.target as Node)
    ) {
      setIsOpen(false);
      document.removeEventListener("mousedown", handleClickOutside);
    }
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  };

  return (
    <div>
      <div onClick={toggleNav} className="text-2xl cursor-pointer">
        <svg fill="none" viewBox="0 0 24 24" height="1.3em">
          <path
            fill="currentColor"
            d="M8 6a2 2 0 11-4 0 2 2 0 014 0zM8 12a2 2 0 11-4 0 2 2 0 014 0zM6 20a2 2 0 100-4 2 2 0 000 4zM14 6a2 2 0 11-4 0 2 2 0 014 0zM12 14a2 2 0 100-4 2 2 0 000 4zM14 18a2 2 0 11-4 0 2 2 0 014 0zM18 8a2 2 0 100-4 2 2 0 000 4zM20 12a2 2 0 11-4 0 2 2 0 014 0zM18 20a2 2 0 100-4 2 2 0 000 4z"
          />
        </svg>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-75 z-50 transition-opacity duration-700 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          ref={navRef}
          className={`fixed right-0 top-0 h-full w-80 p-10 bg-white shadow transition-transform transform duration-700 text-black ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          Conteúdo
        </div>
      </div>
    </div>
  );
};

export default NavToggle;
