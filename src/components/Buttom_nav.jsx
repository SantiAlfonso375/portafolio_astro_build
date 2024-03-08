import React, { useState } from "react";

function Button() {
  // Estado para controlar la variable 'open'
  const [open, setOpen] = useState(false);

  // Función para alternar el valor de 'open'
  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col">
      {/* Botón con el evento onClick para alternar 'open' */}
      <button
        onClick={toggleOpen}
        className="inline-flex items-center justify-end p-2 text-white hover:text-indigo-400 focus:outline-none focus:text-white md:hidden"
      >
        {/* SVG */}
        <svg
          className="w-6 h-6"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          {/* Primer path, visible si open es falso */}
          <path
            className={open ? "hidden" : "inline-flex"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
          {/* Segundo path, visible si open es verdadero */}
          <path
            className={open ? "inline-flex" : "hidden"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>

      {/* Navegación con la clase condicional según 'open' */}
      <nav
        className={`flex-col items-center flex-grow ${
          open ? "flex" : "hidden"
        } md:pb-0 md:flex md:justify-end md:flex-row`}
      >
        <a
          className="px-2 py-2 text-lg font-normal text-vanta-300 lg:px-6 md:px-3 hover:bg-gradient-to-r from-[#df12ff] to-[#e8b066]hover:bg-clip-text hover:rounded-3xl lg:ml-auto"
          href="#home"
        >
          Home
        </a>
        <a
          className="px-2 py-2 text-lg font-normal text-vanta-300 lg:px-6 md:px-3 hover:bg-gradient-to-r from-[#df12ff] to-[#e8b066]hover:bg-clip-text hover:rounded-3xl"
          href="#stack"
        >
          Stack
        </a>
        <a
          className="px-2 py-2 text-lg font-normal text-vanta-300 lg:px-6 md:px-3 hover:bg-gradient-to-r from-[#df12ff] to-[#e8b066]hover:bg-clip-text hover:rounded-3xl"
          href="#project"
        >
          Project
        </a>
        <a
          className="px-2 py-2 text-lg font-normal text-vanta-300 lg:px-6 md:px-3 hover:bg-gradient-to-r from-[#df12ff] to-[#e8b066]hover:bg-clip-text hover:rounded-3xl"
          href="#contact"
        >
          contact
        </a>
      </nav>
    </div>
  );
}
export default Button;
