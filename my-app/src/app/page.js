import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
        <User name="pragati"/>
    </main>
  )
}

const User=(props)=>
{
   return(
    <di>
      <h2>hello {props.name}</h2>
    </di>
   )
}
