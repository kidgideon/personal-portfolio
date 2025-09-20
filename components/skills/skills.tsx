"use client";
import { useEffect, useRef } from "react";
import styles from "./skills.module.css";

type Skill = {
  name: string;
  level: number;
};

const skills: {
  frontend: Skill[];
  backend: Skill[];
  database: Skill[];
} = {
  frontend: [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 90 },
     { name: "JavaScript (ES6+)", level: 92 },
     { name: "Typescipt", level: 95 },
    { name: "Tailwind / CSS", level: 88 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 85 },
    { name: "REST APIs", level: 90 },
  ],
  database: [
    { name: "Firebase", level: 95 },
    { name: "Supabase", level: 91 },
    { name: "MongoDB", level: 88 },
     { name: "Aws", level: 90 },
      { name: "Docker", level: 88 },
    
  ],
};

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const bars = sectionRef.current.querySelectorAll<HTMLDivElement>(
      `.${styles.progressFill}`
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            bars.forEach((bar) => {
              const level = bar.dataset.level;
              if (level) {
                bar.style.width = `${level}%`;
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div ref={sectionRef} className={styles.skillInterface}>
      <h1>Skills & Expertise</h1>
      <p>
        A comprehensive overview of my technical skills and proficiencies across
        the full development stack.
      </p>

      <div className={styles.skillStack}>
        {/* Frontend */}
        <div className={styles.skillBox}>
            <i className="fa-solid fa-desktop"></i>
          <h2>Frontend</h2>
          {skills.frontend.map((skill, i) => (
            <div key={i} className={styles.skill}>
              <span>{skill.name}</span>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  data-level={skill.level.toString()}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Backend */}
        <div className={styles.skillBox}>
            <i className="fa-solid fa-server"></i>
          <h2>Backend</h2>
          {skills.backend.map((skill, i) => (
            <div key={i} className={styles.skill}>
              <span>{skill.name}</span>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  data-level={skill.level.toString()}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Database */}
        <div className={styles.skillBox}>
            <i className="fa-solid fa-database"></i>
          <h2>Database & Cloud</h2>
          {skills.database.map((skill, i) => (
            <div key={i} className={styles.skill}>
              <span>{skill.name}</span>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  data-level={skill.level.toString()}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
