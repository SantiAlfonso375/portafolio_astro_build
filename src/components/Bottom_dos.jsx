import React, { useState } from "react";
import "./style/Bottom_dos.css";

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
            <label className="hamburger inline-flex items-center justify-end text-white hover:text-indigo-400 focus:outline-none focus:text-white md:hidden">
                <input type="checkbox" onClick={toggleOpen}/>
                <svg viewBox="0 0 32 32">
                    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path className="line" d="M7 16 27 16"></path>
                </svg>
            </label>
            {/* Navegación con la clase condicional según 'open' */}
            <nav
                className={`flex-col items-center flex-grow ${open ? "flex" : "hidden"
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
