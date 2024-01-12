import '../styles/globals.scss'

import Header from '../components/Header'

export const metadata = {
  title: 'GEOAPI_PT',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}