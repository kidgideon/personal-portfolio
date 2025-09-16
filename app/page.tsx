import Navbar from "../components/navbar/navbar";
import styles from "./page.module.css";
import Intro from "../components/intro/intro";
import About from "../components/about/about";

export default function Home() {

  return (
    <div className={styles.homeInterface}>
         <Navbar/>
         <Intro/>
         <About/>
    </div>
  );
}

