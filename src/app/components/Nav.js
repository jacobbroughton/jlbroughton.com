import React from "react";
import Link from "next/link";
import navStyles from "../styles/Nav.module.scss";
import { usePathname, useSearchParams } from 'next/navigation'
import { AnimateSharedLayout, motion } from "framer-motion";
// import ThemeToggle from "./ThemeToggle"
import dynamic from "next/dynamic"

const Nav = () => {
  // const router = useRouter();

  const linksList = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/portfolio",
      name: "Portfolio",
    },
    // {
    //   path: "/blog",
    //   name: "Blog",
    // }
  ];

  const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
    ssr: false,
  });

  const pathname = usePathname()

  return (
    <AnimateSharedLayout>
      <nav className={`${navStyles.nav}`}>
        <div className={navStyles.container}>
          <Link href="/" scroll={false} passHref>
            <p>
              <span className={navStyles.fullName}>Jacob Broughton</span>
              <span className={navStyles.initials}>JB</span>
            </p>
          </Link>
          <ul>
            {linksList.map((linkItem) => (
              <li key={linkItem.name}>
                <Link href={linkItem.path} scroll={false} passHref>
                  {linkItem.name}
                  {pathname === linkItem.path && (
                    <motion.div
                      animate
                      initial={false}
                      className={navStyles.underline}
                      layoutId={navStyles.underline}
                      transition="linear"
                    />
                  )}
                </Link>
              </li>
            ))}

          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </AnimateSharedLayout>
  );
};

export default Nav;
