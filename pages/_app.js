import Layout from "../components/Layout"
import { useEffect } from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Meta from "../components//Meta"
import { AnimatePresence } from "framer-motion"
import server from "../config/index"
import Router from "next/router"
import '../styles/globals.scss'

function MyApp({ Component, pageProps, router }) {

  const url = `${server}${router.route}`

  const routeChange = () => {
    const tempFix = () => {
      const allStyleElems = document.querySelectorAll('style[media="x"]')
      allStyleElems.forEach(elem => {
        elem.removeAttribute("media")
      })
    }
    tempFix()
  }

  Router.events.on("routeChangeComplete", routeChange)
  Router.events.on("routeChangeStart", routeChange)

  useEffect(() => {
    router.push({
      pathname: router.pathname,
      query: {...router.query}
    });
  }, [])

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
