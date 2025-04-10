import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Portfolio 31 64 Estudio',
  description: 'Portfolio web para estudio de arquitectura',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="proyecto-container flex flex-col space-y-4 md:space-y-0">
      <div className="image-container w-full md:w-1/2">
        <Image
          src={imagenes[index]}
          alt={titulo}
          width={1000}
          height={600}
          sizes="(max-width: 768px) 100vw, 1000px"
          className="project-image w-full h-auto max-h-[80vh] object-contain"
          priority={index === 0}
          loading="lazy"
        />
      </div>

      <div className="description-container mt-2 text-sm w-full md:w-1/2 flex flex-row justify-between items-center">
        <p className="text-xs font-mono text-left w-3/4">{descripcion}</p>
        <div className="flex justify-center gap-2 mt-1 w-1/4">
          {imagenes.length > 1 && (
            <>
              <button onClick={prev} className="hover:underline">{"<"}</button>
              <span>{index + 1} / {imagenes.length}</span>
              <button onClick={next} className="hover:underline">{">"}</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
