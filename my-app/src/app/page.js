'use client'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
    <h2>Server Component</h2>
    <Link href="/productsList">Go to product List</Link>
    </main>
  )
}
