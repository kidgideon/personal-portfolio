import styles from "./stack.module.css";

const Stack = () => {
  return (
    <div className={styles.stackInterface}>
      <h2>Technologies I Work With</h2>

      <div className={styles.stacks}>
        <div className={styles.stack}>React.js</div>
        <div className={styles.stack}>Next.js</div>
        <div className={styles.stack}>TypeScript</div>
        <div className={styles.stack}>JavaScript (ES6+)</div>
        <div className={styles.stack}>Node.js</div>
        <div className={styles.stack}>Express.js</div>
        <div className={styles.stack}>Firebase</div>
        <div className={styles.stack}>MongoDB</div>
        <div className={styles.stack}>Tailwind CSS</div>
        <div className={styles.stack}>CSS Modules</div>
        <div className={styles.stack}>Git & GitHub</div>
        <div className={styles.stack}>Vercel /Netlify</div>
        <div className={styles.stack}>REST APIs</div>
      </div>
    </div>
  );
};

export default Stack;
