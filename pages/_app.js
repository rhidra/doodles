import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>✨ Doodles ✨</title>

      <meta name="author" content="Rémy Hidra"/>
      <meta name="description" content="Fun little doodles ✨"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>

      {/* Fonts (Montserrat / Spartan) */}
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Spartan:wght@700&display=swap" rel="stylesheet"/>

      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="180x180" href="https://remyhidra.dev/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="https://remyhidra.dev/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="https://remyhidra.dev/favicon-16x16.png"/>
      <link rel="manifest" href="https://remyhidra.dev/site.webmanifest"/>

      {/* Google tracking token */}
      <meta name="google-site-verification" content="zhO_vjy3H84BJz-sXTCFRv7e2gf0y1GX5ojB0KA0PYw" />

      {/* Social sharing */}
      <meta property="og:title" content="✨ Doodles ✨"/>
      <meta property="og:site_name" content="✨ Doodles ✨"/>
      <meta property="og:description" content="Fun little doodles ✨"/>
      <meta property="og:image" content="https://remyhidra.dev/banner.png"/>
      <meta property="og:url" content="https://doodles.remyhidra.dev"/>
      <meta property="og:type" content="website"/> 
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:site" content="remyhidra"/>
    </Head>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp
