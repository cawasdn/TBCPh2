import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'

export default function Home() {
  return (
    <div>
      <Hero />
      <Testimonials />
    </div>
  )
}
