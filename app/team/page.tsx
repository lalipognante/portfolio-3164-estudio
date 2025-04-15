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
          width={600}
          height={400}
          className="rounded-xl shadow-md"
        />
      </div>
    </main>
  );
}
