"use client";

import { useState } from "react";
import Image from "next/image";
import { proyectos } from "../data/proyectos";

export default function HomePage() {
  return (
    <main className="space-y-16">
      {proyectos.map((proyecto, i) => (
        <Proyecto
          key={i}
          titulo={proyecto.titulo}
          imagenes={proyecto.imagenes}
          descripcion={proyecto.descripcion}
        />
      ))}
    </main>
  );
}

function Proyecto({
  titulo,
  imagenes,
  descripcion,
}: {
  titulo: string;
  imagenes: string[];
  descripcion: string;
}) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? imagenes.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === imagenes.length - 1 ? 0 : i + 1));

  return (
    <div className="break-inside-avoid flex flex-col md:flex-col">
      <div className="relative w-full text-left md:w-1/2">
        <Image
          src={imagenes[index]}
          alt={titulo}
          width={1000}
          height={600}
          sizes="(max-width: 768px) 100vw, 1000px"
          className="w-full h-auto max-h-[80vh] object-contain transition-opacity duration-300 ease-in-out"
          priority={index === 0}
          loading="lazy"
        />
      </div>

      <div className="mt-2 text-sm text-left md:w-1/2">
        <div>{titulo}</div>
        <p className="text-xs font-mono">{descripcion}</p>
        {imagenes.length > 1 && (
          <div className="flex justify-start gap-2 mt-1">
            <button onClick={prev} className="hover:underline">{"<"}</button>
            <span>{index + 1} / {imagenes.length}</span>
            <button onClick={next} className="hover:underline">{">"}</button>
          </div>
        )}
      </div>
    </div>
  );
}
