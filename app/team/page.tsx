"use client";

import Image from "next/image";

export default function TeamPage() {
  return (
    <main className="max-w-2xl text-sm space-y-4">
      <ul className="list-none">
        <li>De Biasi Ignacio</li>
        <li>Pognante Mariano</li>
        <li>Taravella Francisco</li>
      </ul>

      <div className="flex justify-center">
        <Image
          src="/team.webp"
          alt="Foto del equipo"
          width={1000}
          height={600}
          className="w-full h-auto object-contain"
        />
      </div>
    </main>
  );
}
