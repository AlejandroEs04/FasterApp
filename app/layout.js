import { FasterProvider } from '../context/FasterProvider'
import styles from '../styles/globals.css'
import { Roboto } from 'next/font/google'
import Header from '../components/Header';

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900']  })

export const metadata = {
  title: 'Faster Shop',
  description: 'Tienda de productos dentales Faster',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <FasterProvider>
          <header>
            <Header />
          </header>
          
          {children}
        </FasterProvider>
      </body>
    </html>
  )
}
