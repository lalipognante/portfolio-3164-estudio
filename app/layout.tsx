import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Portfolio 31 64 Estudio',
  description: 'Portfolio web para estudio de arquitectura',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="font-mono px-6 py-10">
        <header className="mb-10">
          <h1 className="text-xl md:text-2xl font-mono font-medium tracking-wide mb-4">31 64 ESTUDIO</h1>
          <nav className="flex flex-wrap gap-6 text-sm font-mono">
            <Link href="/">Proyectos</Link>
            <Link href="/about">About</Link>
            <Link href="/team">Team</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
