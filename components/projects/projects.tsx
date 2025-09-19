
import Image from "next/image";
import styles from "./projects.module.css";
import minimartImage from "../../images/minimart.png";
import traitsnapImage from "../../images/traitsnap.png";
import mindburstImage from "../../images/mindburst.png";

const projects = [
  {
    title: "Minimart",
    description: `Minimart is a storefront builder designed for businesses to easily
      create customizable online stores. It supports secure payment
      integration, product and service listings, analytics, and a
      user-friendly management system. The platform empowers businesses
      to establish their online presence without technical barriers.`,
    stack: "React, Firebase, Node.js, Express, Next.js, Paystack",
    image: minimartImage,
    alt: "Minimart project",
    demoLink: "https://minimart.ng",
    priority: true,
  },
  {
    title: "Traitsnap",
    description: `Traitsnap is a personalized character development tool that
      accurately tests a person’s traits and provides detailed feedback.
      It highlights strengths and areas for growth, helping users
      improve themselves in a structured and meaningful way.`,
    stack: "React, Firebase",
    image: traitsnapImage,
    alt: "Traitsnap project",
    demoLink: "https://traitsnap.online",
    priority: false,
  },
  {
    title: "Mindburst TV",
    description: `MindburstTV is a high-quality global news broadcasting platform.
      It delivers timely and credible information across diverse topics,
      combining digital journalism with real-time reporting. The site
      brings stories from around the world, ensuring readers have access
      to impactful and engaging news.`,
    stack: "React, Firebase, Express.js, MongoDB",
    image: mindburstImage,
    alt: "Mindburst TV project",
    demoLink: "https://mindbursttv.com",
    priority: false,
  },
];

const Projects = () => {
  return (
    <div className={styles.projectsInterface}>
      <h1>Featured Projects</h1>
      <p>
        A showcase of my top projects, highlighting expertise in full-stack
        development, scalable systems, and modern web technologies.
      </p>

      <div className={styles.projects}>
        {projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <Image
              src={project.image}
              alt={project.alt}
              className={styles.projectImage}
              priority={project.priority}
            />
            <div className={styles.projectContent}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p>
                <strong>
                  <i className="fa-solid fa-code"></i>
                </strong>{" "}
                {project.stack}
              </p>
            </div>

            <div className={styles.linkAligner}>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.githubBtn}>
        <span>
          <i className="fa-brands fa-github"></i>
        </span>{" "}
        View All Projects on GitHub
      </button>
    </div>
  );
};

export default Projects;
