// 'use client'

import { Suspense } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Meta from "../components//Meta";
import { AnimatePresence } from "framer-motion";
// import { useRouter } from "next/navigation";
import "../styles/globals.scss";
import { NavigationEvents } from "./components/NavigationEvents";
import Script from 'next/script'

export default function RootLayout({children}) {

  // const router = useRouter();

  // const routeChange = () => {
  //   const tempFix = () => {
  //     const allStyleElems = document.querySelectorAll('style[media="x"]');
  //     allStyleElems.forEach((elem) => {
  //       elem.removeAttribute("media");
  //     });
  //   };
  //   tempFix();
  // };

  // Router.events.on("routeChangeComplete", routeChange);
  // Router.events.on("routeChangeStart", routeChange);

  // useEffect(() => {
  //   router.push({
  //     pathname: router.pathname,
  //     query: { ...router.query },
  //   });
  // }, []);

  return (
    <html suppressHydrationWarning>
      <head></head>
      <body data-theme='dark'>
        <Script strategy="beforeInteractive" src="scripts/initialThemeScript.js"/>
        <Meta />
        <Nav />
        {/* <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        > */}
          {children}
        {/* </AnimatePresence> */}
        <Footer />
        <Suspense fallback={null}>
          <NavigationEvents/>
        </Suspense>
      </body>
    </html>
  );
}
