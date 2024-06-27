import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>Diga que usuario es:</div>
      <br/>
          <Link href="/medic">Medico</Link>
      <br/>
        <Link href="/pacient">Cliente</Link>
    </>
  )
}
