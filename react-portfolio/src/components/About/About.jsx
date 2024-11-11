import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
      
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/React.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/nodejs.png")} alt="Cursor icon" className={styles.image}/>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I'm a backend developer skilled in Node.js, building efficient and scalable server-side applications
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/figma.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Designer</h3>
              <p>
              I am a Figma developer, turning designs into responsive websites.
              Ensuring seamless and interactive user experiences
              </p>
            </div>
          </li>
        
        
        </ul>
      </div>
    </section>
  );
};
