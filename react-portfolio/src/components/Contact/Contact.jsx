import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:mufizmalar@gmail.com">mufizmalar@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/mufeez-692840211">Mahammad Mufeez</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/whatsapp.png")} alt="WhatsApp icon" />
          <a href="https://wa.me/qr/EONNMBHYTVIKM1">+91-6362514956</a>
        </li>
      </ul>
     
    </footer>
  );
};
