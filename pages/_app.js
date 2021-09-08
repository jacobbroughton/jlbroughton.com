import Layout from "../components/Layout"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Meta from "../components//Meta"
import { AnimatePresence } from "framer-motion"
import server from "../config/index"
import '../styles/globals.scss'

function MyApp({ Component, pageProps, router }) {

  const url = `${server}${router.route}`

  return (
    <>
      <Meta/>
      <Nav/>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={url}/>
      </AnimatePresence>
      <Footer/>
    </>

  )
}

export default MyApp
