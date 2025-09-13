"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close menu after clicking
  };

  return (
    <div className={styles.navbar}>
      {/* GitHub Icon */}
      <div className={styles.githubArea}>
        <a
          href="https://github.com/kidgideon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>

      {/* Desktop Links */}
      <div className={styles.profileArea}>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("projects")}>Projects</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </div>

      {/* Hamburger (Mobile) */}
      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
    <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </div>

      {/* AnimatePresence handles mount/unmount animations */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)} // close on outside click
            />

            {/* Mobile Menu Drawer */}
            <motion.div
              className={styles.mobileMenu}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <button onClick={() => scrollToSection("about")}>About</button>
              <button onClick={() => scrollToSection("projects")}>Projects</button>
              <button onClick={() => scrollToSection("contact")}>Contact</button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
