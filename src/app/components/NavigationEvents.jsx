"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Router.events.on("routeChangeComplete", routeChange);
  // Router.events.on("routeChangeStart", routeChange);

  // useEffect(() => {
  //   router.push({
  //     pathname: router.pathname,
  //     query: { ...router.query },
  //   });
  // }, []);


  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    console.log(url)
    // use the current url
    const routeChange = () => {
      const tempFix = () => {
        const allStyleElems = document.querySelectorAll('style[media="x"]');
        allStyleElems.forEach((elem) => {
          elem.removeAttribute("media");
        });
      };
      tempFix();
    };
  
    routeChange()
  }, [pathname, searchParams])
}