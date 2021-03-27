import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Head>
      <title>Nija | Home </title>
      <meta name="keywords" contnet="ninjas" />
    </Head>
    <div>
      <h2 className={styles.title} >Hello Mustaq Welcome to the NextJS Home Page.</h2>
      <p className={styles.text} >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to
                 have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                 <p className={styles.text} >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to
                 have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type spe</p>
       <Link href="/ninjas">
         <a className={styles.btn} >See Ninja Listing</a>
       </Link>
    </div>
    </>
  )
}
