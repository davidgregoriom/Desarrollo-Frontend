import { monserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) { /*Esto envuelve a la página, es el layout de la página*/
  return (
    <html lang="en">
      <body className={`${monserrat.className} antialiased`}>
        <header className='py-10 flex justify-center items-center'>
          <p>Esto es el header</p>
        </header>
        {/*Esto es parte del layout*/}
        Esto es parte del layout
        {children}
        <footer className='py-10 flex justify-center items-center'>
          <p>Esto es el footer</p>
        </footer>
        </body>
    </html>
  );
}
