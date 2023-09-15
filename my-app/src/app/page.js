'use client'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {
  const[name,setName]=useState("pragati")
  return (
    <main className={styles.main}>
       <h1>Event Function And state</h1>
       <h2>{name}</h2>
       <button onClick={()=>setName("shikha")}>Click Me</button>
    </main>
  )
}
