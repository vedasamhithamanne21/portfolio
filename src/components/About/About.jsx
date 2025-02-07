import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              Designed responsive and user-friendly UIs using React, ensuring seamless state management with Redux and context API. Developed real-time dashboards with D3.js & WebSockets, optimized performance with lazy loading & code splitting, and ensured cross-browser compatibility through rigorous testing.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              Designed and developed scalable microservices and APIs using Node.js, Express.js, Django, and Flask, ensuring efficient database management, authentication, and real-time data processing. Experienced in leveraging cloud platforms like AWS for seamless deployment and scalability.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
