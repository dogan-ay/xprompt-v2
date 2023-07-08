import { JobContextProvider } from '@/contexts/JobContext';
import '@/styles/globals.css';
import { PT_Sans } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/sections/Footer';
export default function App({ Component, pageProps }) {
  return (
    <JobContextProvider>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </JobContextProvider>
  );
}
