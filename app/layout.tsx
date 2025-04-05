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
          <div className="flex justify-center mb-4">
            <Image
              src="/logo.jpeg"
              alt="31 64 Estudio"
              width={200}
              height={100}
            />
          </div>
          
          <nav className="flex flex-wrap gap-6 text-sm font-mono">
            <Link href="/" className="cursor-pointer hover:underline transition">
              Proyectos
            </Link>
            <Link href="/about" className="cursor-pointer hover:underline transition">
              About
            </Link>
            <Link href="/team" className="cursor-pointer hover:underline transition">
              Team
            </Link>
            <Link href="/contact" className="cursor-pointer hover:underline transition">
              Contact
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
