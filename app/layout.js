import { Inter } from 'next/font/google'
import './styles/main.css'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Drawer from './components/Drawer'
// import { store } from './redux/store'
// import { Provider } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The BIG Cup',
  description: 'The coffee inc.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* <Provider store={store}> */}
        <Header />
        <Navbar />
        {/* <Hero /> */}
        {children}
        <Footer />
        {/* </Provider> */}
      </body>
    </html>
  )
}
