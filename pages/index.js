import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maxime placeat, ut temporibus vel, rerum dicta illo molestiae ipsam qui tenetur repudiandae, quisquam cumque distinctio sunt. Autem alias doloribus pariatur quisquam ipsam.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, sed! Fuga, amet in alias iste minima quae adipisci dolore quasi ducimus voluptatem voluptate odit.</p>
      <Link href="/ninjas">
        see ninjas listing
      </Link>
      
    </div>
  )
}
