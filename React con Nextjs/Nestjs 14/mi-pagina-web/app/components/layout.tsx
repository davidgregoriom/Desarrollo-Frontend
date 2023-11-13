import SideNav from '../ui/dashboard/sidenav';
import { monserrat } from '../ui/fonts';
import '../ui/global.css';
import styles from './styles.module.css';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) { /*Esto envuelve a la página, es el layout de la página*/
  return (
    <html lang="en">
      <body className={`${monserrat.className} ${styles.main}`}>
        <header className={styles.header}>
          <p>Esto es el header</p>
        </header>
        <div className={styles.side}>
          <SideNav />
        </div>
        <div className={styles.children}>
          {children}
        </div>
        <footer className={styles.footer}>
          <p>Esto es el footer</p>
        </footer>
        </body>
    </html>
  );
}
