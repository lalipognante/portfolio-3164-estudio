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
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const prev = () => setIndex((i) => (i === 0 ? imagenes.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === imagenes.length - 1 ? 0 : i + 1));

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;

    if (deltaX > 50) next();        // swipe left
    else if (deltaX < -50) prev();  // swipe right

    setTouchStartX(null);
  };

  return (
    <div className="proyecto-container flex flex-col space-y-4 md:space-y-0">
      <div
        className="image-container w-full md:w-1/2"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          key={index}
          src={imagenes[index]}
          alt={titulo}
          width={1000}
          height={600}
          sizes="(max-width: 768px) 100vw, 1000px"
          className="project-image w-full h-auto max-h-[80vh] object-contain transition-opacity duration-300 ease-in-out opacity-100"
          priority={index === 0}
          loading="lazy"
        />
      </div>

      <div className="description-container pt-2 mt-2 text-sm w-full md:w-1/2 flex items-center space-x-4">
        <p className="text-xs font-mono text-left">{descripcion}</p>
        {imagenes.length > 1 && (
          <div className="text-xs flex justify-center gap-2 min-w-[78px]">
            <button onClick={prev} className="hover:underline">{"<"}</button>
            <span>{index + 1} / {imagenes.length}</span>
            <button onClick={next} className="hover:underline">{">"}</button>
          </div>
        )}
      </div>
    </div>
  );
}
