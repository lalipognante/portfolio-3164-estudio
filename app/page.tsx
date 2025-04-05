import { proyectos } from "../data/proyectos";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 items-center py-10">
      {proyectos.map((proyecto, i) => (
        <section key={i} className="w-full max-w-4xl">
          <h2 className="text-center font-mono text-base mb-4">{proyecto.titulo}</h2>
          <div className="flex flex-col gap-6">
            {proyecto.imagenes.map((src, j) => (
              <div key={j}>
                <img
                  src={src}
                  alt={`Imagen ${j + 1} de ${proyecto.titulo}`}
                  className="w-full object-contain mb-2"
                />
                <p className="text-center text-sm font-mono">{proyecto.descripcion}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
