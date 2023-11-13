import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

export default function Page() {
  return (
    <main className={styles.page_header}>
        <p className={styles.left_column}>
            <strong>Bienvenido a mi pagina web, aqui esta mi </strong>
            <a href="https://github.com/davidgregoriom" className="text-blue-500"> Github</a>
        </p>
        <div className={styles.rightColumn}>
          <Image src="/foto_david.png" alt="Secrenshort" width={1000} height={760} className="hidden md:block" />
        </div>
    </main>
  );
}
