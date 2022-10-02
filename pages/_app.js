import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <NextNProgress options={{ easing: "ease", speed: 500 }} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
