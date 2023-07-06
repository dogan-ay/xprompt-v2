import Nav from '@/components/Nav'
import Footer from '@/components/sections/Footer'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-xcolor-200'>
        <Nav/>
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  )
}
