import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) { /*Esto envuelve a la página, es el layout de la página*/
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
