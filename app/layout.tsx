"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import './globals.css';

// Componente para los enlaces del navbar
const NavbarLinks = () => (
  <>
    <Link href="/" className="cursor-pointer hover:underline transition">
      Proyectos
    </Link>
    <Link href="/about" className="cursor-pointer hover:underline transition">
      Estudio
    </Link>
    <Link href="/team" className="cursor-pointer hover:underline transition">
      Equipo
    </Link>
    <Link href="/contact" className="cursor-pointer hover:underline transition">
      Contacto
    </Link>
  </>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="es">
      <body className="font-mono px-6 py-10">
        <header className="mb-10">
          {/* Contenedor para el logo y el icono de hamburguesa */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex justify-start">
              <Image
                src="/logoGris.png"
                alt="31 64 Estudio"
                width={150}
                height={50}
              />
            </div>

            {/* Icono de hamburguesa */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800">
                {isOpen ? (
                  <XIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Navbar */}
          <nav className="relative">
            {/* Menú para pantallas grandes */}
            <div className="hidden md:flex flex-wrap gap-6 text-sm font-mono">
              <NavbarLinks />
            </div>

            {/* Menú para pantallas pequeñas */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
              <div className="flex gap-4 text-sm font-mono">
                <NavbarLinks />
              </div>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
