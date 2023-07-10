import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        href="https://fonts.cdnfonts.com/css/zen-kaku-gothic-new"
        rel="stylesheet"
      />
      <body className="bg-slate-50 relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
