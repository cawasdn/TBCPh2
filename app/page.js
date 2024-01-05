import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import Products from './components/Products'

export default function Home() {
  return (
    <div>
      <Hero />
      <Products />
      <Testimonials />
    </div>
  )
}
