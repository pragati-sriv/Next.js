'use client'
import Link from 'next/link'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <h2>Basic Routing | Make New Page</h2>
      <br/>
      <Link href="/login">Go to Login Page</Link>
      <br/>
      <Link href="/about">Go to About Page</Link>
      <br/>
      <br/>
      <button onClick={()=>router.push("/login")}>Go Login</button>
      <br/>
      <br/>
      <button  onClick={()=>router.push("/about")}>Go About</button>
    </main>
  )
}
