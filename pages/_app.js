import '../styles/globals.css'

import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <NextNProgress options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
