import { FasterProvider } from '../context/FasterProvider'
import Providers from '../context/AuthProvider';
import styles from '../styles/globals.css'
import { Roboto } from 'next/font/google'
import Header from '../components/Header';
import ToastContenedor from '../components/ToastContenedor'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'
import Script from 'next/script';

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900']  })

export const metadata = {
  title: 'Faster Shop',
  description: 'Tienda de productos dentales Faster',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
        <meta property="og:image" content={`http://loaclhost:3000/api/og`} />
      </head>
      <Providers>
        <FasterProvider>
          <body className={`${roboto.className} overflow-x-hidden`} id='root'>
            <SideBar />
            <header>
              <Header />
            </header>

            {children}

            <footer>
              <Footer />
            </footer>
            
            <ToastContenedor />
          </body>
        </FasterProvider>
      </Providers>
    </html>
  )
}
