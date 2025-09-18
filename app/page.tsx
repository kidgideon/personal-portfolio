import Navbar from "../components/navbar/navbar";
import styles from "./page.module.css";
import Intro from "../components/intro/intro";
import About from "../components/about/about";
import Head from "next/head"; // <-- add this

export default function Home() {
  return (
    <>
      <Head>
        <title>Kofi Ebedaowei Gideon | Fullstack Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio website of Kofi Ebedaowei Gideon, a passionate Fullstack Developer specializing in React, JavaScript, HTML, CSS, and modern web technologies. Explore projects, skills, and experiences."
        />
        <meta
          name="keywords"
          content="Kofi Ebedaowei Gideon, Kofi Gideon, Fullstack Developer, React Developer, JavaScript Developer, Frontend Developer, Backend Developer, Web Developer Portfolio, gideon , Gideon , Kofi , kofi , Ebedaowei, ebedaowei"
        />
        <meta name="author" content="Kofi Ebedaowei Gideon" />

        {/* Favicons (put these PNGs in your /public folder) */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Kofi Ebedaowei Gideon | Fullstack Developer Portfolio" />
        <meta
          property="og:description"
          content="Portfolio website of Kofi Ebedaowei Gideon, Fullstack Developer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kofi-ebedaowei-gideon.vercel.app/" />
        <meta
          property="og:image"
          content="https://kofi-ebedaowei-gideon.vercel.app/me.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kofi Ebedaowei Gideon | Fullstack Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Portfolio website of Kofi Ebedaowei Gideon, Fullstack Developer."
        />
        <meta
          name="twitter:image"
          content="https://kofi-ebedaowei-gideon.vercel.app/me.jpg"
        />

        {/* JSON-LD Structured Data for Logo */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Kofi Ebedaowei Gideon",
            "url": "https://kofi-ebedaowei-gideon.vercel.app",
            "logo": "https://kofi-ebedaowei-gideon.vercel.app/me.jpg",
            "sameAs": [
              "https://github.com/kidgideon",
              "https://www.linkedin.com/in/YOUR-LINKEDIN"
            ]
          }
          `}
        </script>
      </Head>

      <div className={styles.homeInterface}>
        <Navbar />
        <Intro />
        <About />
      </div>
    </>
  );
}
