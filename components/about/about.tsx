import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.aboutInterface}>
      <div className={styles.topSection}>
        <h1>About</h1>
      <h4>
        {"I'm a passionate full-stack developer with a love for creating innovative digital solutions. My journey in tech started with curiosity and has evolved into expertise across multiple domains."}
      </h4>

      </div>
      
      <div className={styles.journeyDescription}>
        <div className={styles.journeyArea}>
          <div className={styles.journeyText}>
            <h2>My journey</h2>
            <p>
              {"With over 4 years of professional experience, I've had the privilege of working on diverse projects ranging from startup MVPs to enterprise-level applications. My expertise spans across modern web technologies, cloud platforms, and database systems. I believe in writing clean, maintainable code and staying updated with the latest industry trends. When I'm not coding, you'll find me contributing to open-source projects or mentoring fellow developers."}
            </p>
          </div>
          <div className={styles.coreValues}>
            <h2>Core Values</h2>
            <ul>
              <li>Quality over quantity</li>
              <li>Continuous learning &amp; growth</li>
              <li>Collaborative team spirit</li>
              <li>User-centered design thinking</li>
            </ul>
          </div>
        </div>

        <div className={styles.personalAttributes}>
          <div className={styles.attribute}>
            <i className="fa-solid fa-user-tie"></i>
            <h1>+3 years</h1>
            <p>Professional experience</p>
          </div>

          <div className={styles.attribute}>
            <i className="fa-solid fa-diagram-project"></i>
            <h1>15+ projects</h1>
            <p>Successfully delivered</p>
          </div>

          <div className={styles.attribute}>
            <i className="fa-solid fa-code"></i>
            <h1>Fullstack</h1>
            <p>Backend and frontend</p>
          </div>

          <div className={styles.attribute}>
            <i className="fa-solid fa-code-branch"></i>
            <h1>Clean code</h1>
            <p>Best practices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
