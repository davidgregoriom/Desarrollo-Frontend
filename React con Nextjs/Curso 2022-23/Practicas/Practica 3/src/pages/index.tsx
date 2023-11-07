import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Id from '@/pages/planets/[id]'
import Pages from './planets/[page]'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  <>
    <body>
        <div id="Botones">
          <button id='atras' onClick={()=>Pages}></button>
          <button id='adelante' onClick={()=>Pages}></button>
        </div>
        <div>
          
        </div>
    </body>
  </>
}