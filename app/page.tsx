"use client";

import { useState } from "react";
import Image from "next/image";

const proyectos = [
  {
    titulo: "Clément Vergely, Versailles",
    imagenes: ["/proyectos/proyecto1-1.jpg", "/proyectos/proyecto1-2.jpg"],
  },
  {
    titulo: "Jean Nouvel, Lyon",
    imagenes: ["/proyectos/proyecto2-1.jpg"],
  },
  // Agregá más proyectos acá
];

export default function HomePage() {
  return (
    <main className="space-y-16">
      {proyectos.map((proyecto, i) => (
        <Proyecto key={i} titulo={proyecto.titulo} imagenes={proyecto.imagenes} />
      ))}
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
            <button onClick={prev} className="hover:underline">
              {"<"}
            </button>
            <span>
              {index + 1} / {imagenes.length}
            </span>
            <button onClick={next} className="hover:underline">
              {">"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
