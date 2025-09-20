"use client";

import { motion } from "framer-motion";
import styles from "./intro.module.css";

const Intro = () => {
  // smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.introInterface}>
      <div className={styles.overlay}></div>

      <motion.div
        className={styles.introContent}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p>Hello I’m</p>

        {/* Typing animation for name */}
        <motion.h1
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className={styles.typing}
        >
          Gideon Kofi Ebedaowei
        </motion.h1>

        {/* Fade-in for role */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Full Stack Developer
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2, duration: 1 }}
        >
          Crafting digital experiences with modern technologies. Passionate about
          building scalable applications that make a difference.
        </motion.p>

        {/* Buttons */}
        <div className={styles.intouchBtn}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("projects")}
          >
            View my work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
          >
            Get in touch
          </motion.button>
        </div>

        {/* Social Icons */}
        <motion.div
          className={styles.connectionIcon}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <a
            href="https://www.linkedin.com/in/gideon-kofi-08158b2a9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/kidgideon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://twitter.com/kid_Gideon_1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-square-x-twitter"></i>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;
