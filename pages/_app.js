import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <SessionProvider session={session}>
      <NextNProgress options={{ showSpinner: false }} />
      <Component {...pageProps} />

    </SessionProvider>
  )
}

export default MyApp

