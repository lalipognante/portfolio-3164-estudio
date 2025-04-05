export const metadata = {
  title: 'Portfolio 31 64 Estudio',
  description: 'Portfolio web para estudio de arquitectura',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
