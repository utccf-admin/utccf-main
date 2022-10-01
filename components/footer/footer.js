import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      Made with React, NextJS, and Vercel. View the source code{" "}
      <a
        className={styles.link}
        href="https://github.com/utccf-admin/utccf-main"
      >
        here
      </a>
      .
    </div>
  );
}
