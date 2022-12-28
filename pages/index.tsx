import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/**Section 1 Component - Threejs */ }
      <div className="bg-gray-400 h-screen flex items-center justify-center ">
        <h1>
          threejs page
        </h1>
      </div>

      {/**Section 2 Component - About me */ }

      {/**Section 3 Component - Projects */ }

      {/**Section 4 Component - Blog Links */ }

    </>
  )
}
