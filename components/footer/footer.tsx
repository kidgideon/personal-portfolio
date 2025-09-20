import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Gideon Kofi Ebedaowei. All rights reserved.</p>
      <div className={styles.socials}>
        <a
          href="https://github.com/kidgideon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/gideon-kofi-08158b2a9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com/kid_Gideon_1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
