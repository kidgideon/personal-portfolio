import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactInterface} id="contact">
      <h1>Get in Touch</h1>
      <p>
        I am always open to new opportunities, collaborations, and professional
        conversations. Feel free to reach out!
      </p>

      <div className={styles.contactGrid}>
        {/* Email */}
        <div className={styles.contactCard}>
          <i className="fa-solid fa-envelope"></i>
          <h3>Email</h3>
          <p>kofigideon065@gmail.com</p>
        </div>

        {/* Phone */}
        <div className={styles.contactCard}>
          <i className="fa-solid fa-phone"></i>
          <h3>Phone</h3>
          <p>+234 7046578294</p>
        </div>

        {/* GitHub */}
        <div className={styles.contactCard}>
          <i className="fa-brands fa-github"></i>
          <h3>GitHub</h3>
          <a href="https://github.com/kidgideon#" target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>

        {/* LinkedIn */}
        <div className={styles.contactCard}>
          <i className="fa-brands fa-linkedin"></i>
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/gideon-kofi-08158b2a9/" target="_blank" rel="noopener noreferrer">
            Connect
          </a>
        </div>

        {/* Twitter/X */}
        <div className={styles.contactCard}>
          <i className="fa-brands fa-x-twitter"></i>
          <h3>Twitter</h3>
          <a href="https://twitter.com/kid_Gideon_1" target="_blank" rel="noopener noreferrer">
            Follow
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
