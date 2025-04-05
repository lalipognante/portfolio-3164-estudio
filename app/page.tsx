"use client";

import { useState } from "react";
import Image from "next/image";
import { proyectos } from "../data/proyectos";
import dynamic from "next/dynamic";

const Lightbox = dynamic(() => import("react-image-lightbox"), { ssr: false });
import "react-image-lightbox/style.css";

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
  const [isOpen, setIsOpen] = useState(false);

  const prev = () => setIndex((i) => (i === 0 ? imagenes.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === imagenes.length - 1 ? 0 : i + 1));

  return (
    <div className="break-inside-avoid">
      <button onClick={() => setIsOpen(true)} className="w-full">
        <Image
          src={imagenes[index]}
          alt={titulo}
          width={1000}
          height={600}
          sizes="(max-width: 768px) 100vw, 1000px"
          className="w-full h-auto max-h-[80vh] object-contain transition-opacity duration-300 ease-in-out"
          priority={index === 0}
        />
      </button>
      <div className="mt-2 text-sm text-center">
        <div>{titulo}</div>
        <p className="text-xs font-mono">{descripcion}</p>
        {imagenes.length > 1 && (
          <div className="flex justify-center gap-2 mt-1">
            <button onClick={prev} className="hover:underline">{"<"}</button>
            <span>{index + 1} / {imagenes.length}</span>
            <button onClick={next} className="hover:underline">{">"}</button>
          </div>
        )}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={imagenes[index]}
          nextSrc={imagenes[(index + 1) % imagenes.length]}
          prevSrc={imagenes[(index + imagenes.length - 1) % imagenes.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={prev}
          onMoveNextRequest={next}
          imageCaption={`${titulo} — ${descripcion}`}
        />
      )}
    </div>
  );
}
