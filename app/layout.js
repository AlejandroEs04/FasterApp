import { FasterProvider } from '../context/FasterProvider'
import styles from '../styles/globals.css'
import { Roboto } from 'next/font/google'
import Header from '../components/Header';
import ToastContenedor from '../components/ToastContenedor'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900']  })

export const metadata = {
  title: 'Faster Shop',
  description: 'Tienda de productos dentales Faster',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <FasterProvider>
        <body className={roboto.className} id='root'>
          <header>
            <Header />
          </header>
          
          {children}

          <ToastContenedor />
        </body>
      </FasterProvider>
    </html>
  )
}
