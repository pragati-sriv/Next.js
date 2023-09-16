'use client'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h2> Api Client Component</h2>
      <Link href="/productlist">Go to Product Page</Link>
    </main>
  )
}
