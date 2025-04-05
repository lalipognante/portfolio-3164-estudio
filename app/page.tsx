/* Archivo: app/page.tsx */

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['400'] });

const proyectos = [
  {
    titulo: "Clément Vergely, Versailles",
    imagenes: [
      "/proyectos/proyecto1-1.jpg",
      "/proyectos/proyecto1-2.jpg"
    ]
  },
  {
    titulo: "Jean Nouvel, Lyon",
    imagenes: [
      "/proyectos/proyecto2-1.jpg"
    ]
  },
  // Agregar más proyectos aquí
];

const navItems = ["About", "Team", "Contact"];

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <main className={`${robotoMono.className} min-h-screen bg-white text-black px-4 py-10`}>
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h1 className="text-xl md:text-2xl font-mono font-medium tracking-wide mb-4">31 64 ESTUDIO</h1>
          <nav className="flex flex-wrap gap-6 text-sm font-mono">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase()}`}
                className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item}
              </a>
            ))}
          </nav>
        </header>

        <div className="space-y-16">
          {proyectos.map((proyecto, i) => (
            <Proyecto key={i} titulo={proyecto.titulo} imagenes={proyecto.imagenes} />
          ))}
        </div>

        <section id="about" className="mt-24 text-sm leading-relaxed max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold mb-4">Sobre el estudio</h2>
          <p>
            31 64 estudio es oficina de arquitectura fundada en 2024 en Córdoba Capital, Argentina,
            comprometida con el diseño de espacios habitables y su relación con el entorno. Su nombre responde a las
            coordenadas geográficas 31° sur y 64° oeste, haciendo del contexto una reflexión primordial e ineludible.
          </p>
          <p className="mt-4">
            Abordamos el proceso arquitectónico en todas sus etapas con una búsqueda del manejo de la técnica y conscientes del paso del tiempo en el objeto construido. Creemos en la necesaria integridad entre programa, forma y contexto. La sensibilidad hacia el ser humano, pero también en los mecanismos de construcción con el anhelo de dominar el arte de construir.
          </p>
        </section>

        <section id="team" className="mt-16 text-sm max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold mb-4">Equipo de trabajo</h2>
          <ul className="list-disc list-inside">
            <li>De Biasi Ignacio</li>
            <li>Pognante Mariano</li>
            <li>Taravella Francisco</li>
          </ul>
        </section>

        <section id="contact" className="mt-16 text-sm max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold mb-4">Contacto</h2>
          <p>Av. Ciudad de Valparaíso 4236 Oficina 5, Cba, Argentina.</p>
          <p>+54 9 3512389500</p>
          <p><a href="mailto:3164estudio@gmail.com" className="underline">3164estudio@gmail.com</a></p>
          <p><a href="https://instagram.com" className="underline" target="_blank">Instagram</a></p>
        </section>

        <footer className="mt-20 text-xs text-gray-400 text-center">
          <p>3164estudio@gmail.com</p>
        </footer>
      </div>
    </main>
  );
}

function Proyecto({ titulo, imagenes }: { titulo: string; imagenes: string[] }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? imagenes.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === imagenes.length - 1 ? 0 : i + 1));

  return (
    <div className="break-inside-avoid">
      <Image
        src={imagenes[index]}
        alt={titulo}
        width={1200}
        height={800}
        className="w-full h-auto object-cover"
      />
      <div className="mt-2 text-sm text-center">
        <div>{titulo}</div>
        {imagenes.length > 1 && (
          <div className="flex justify-center gap-2 mt-1">
            <button onClick={prev} className="hover:underline">{"<"}</button>
            <span>{index + 1} / {imagenes.length}</span>
            <button onClick={next} className="hover:underline">{">"}</button>
          </div>
        )}
      </div>
    </div>
  );
}