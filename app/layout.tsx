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
    <html lang="es">
      <body className="font-mono px-6 py-10">
        <header className="mb-10">
          <div className="flex justify-start mb-4">
            <Image
              src="/logoGris.png"
              alt="31 64 Estudio"
              width={150}
              height={50}
            />
          </div>
          
          <nav className="flex flex-wrap gap-6 text-sm font-mono">
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
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
