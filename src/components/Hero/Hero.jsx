import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Veda Samhitha Manne</h2>
        <p className={styles.description}>
        Innovative and solutions-driven Software Developer with 4 years of experience in designing, developing, and deploying scalable solutions using JavaScript, React, Node.js, and modern DevOps practices. Skilled in leading cross-functional teams, optimizing operational efficiencies, and driving the adoption of cutting-edge technologies to exceed business objectives.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
