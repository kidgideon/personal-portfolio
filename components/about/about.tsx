import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.aboutInterface}>
      <h1>About</h1>
      <h4>
        {"I'm a passionate full-stack developer with a love for creating innovative digital solutions. My journey in tech started with curiosity and has evolved into expertise across multiple domains."}
      </h4>

      <div className={styles.journeyDescription}>
        <div className={styles.journeyArea}>
          <div>
            <h2>My journey</h2>
            <p>
              {"With over 4 years of professional experience, I've had the privilege of working on diverse projects ranging from startup MVPs to enterprise-level applications. My expertise spans across modern web technologies, cloud platforms, and database systems. I believe in writing clean, maintainable code and staying updated with the latest industry trends. When I'm not coding, you'll find me contributing to open-source projects or mentoring fellow developers."}
            </p>
          </div>
          <div>
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
            <h1>+3 years</h1>
            <p>Professional experience</p>
          </div>

          <div className={styles.attribute}>
            <h1>15+ projects</h1>
            <p>Successfully delivered</p>
          </div>

          <div className={styles.attribute}>
            <h1>Fullstack</h1>
            <p>Backend and frontend</p>
          </div>

          <div className={styles.attribute}>
            <h1>Clean code</h1>
            <p>Best practices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
