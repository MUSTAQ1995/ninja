import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h2>Hello Mustaq Welcome to the nodeJS.</h2>
      <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to
                 have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                 <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to
                 have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type spe</p>
       <Link href="/ninjas">
         <a>See Ninja Listing</a>
       </Link>
       <Footer/>
    </div>
  )
}
