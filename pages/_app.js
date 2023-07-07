import { JobContextProvider } from '@/contexts/JobContext';
import '@/styles/globals.css';
import { PT_Sans } from 'next/font/google';

export default function App({ Component, pageProps }) {
  return (
    <JobContextProvider>
      <Component {...pageProps} />
    </JobContextProvider>
  );
}
