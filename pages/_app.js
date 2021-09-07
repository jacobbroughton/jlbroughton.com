import Layout from "../components/Layout"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Meta from "../components//Meta"
import { AnimatePresence, motion } from 'framer-motion'
import server from "../config/index"
import '../styles/globals.scss'

function MyApp({ Component, pageProps, router }) {

  // const url = `${server}${router.route}`
  // console.log(url)

  return (
    <>
      <Meta/>
      {/* <Nav/> */}
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Layout key={router.route}>
           <Component {...pageProps}/>
        </Layout>
       
      </AnimatePresence>
      {/* <Footer/> */}
    </>

  )
}

export default MyApp
