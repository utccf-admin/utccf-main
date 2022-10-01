import styles from "./section.module.css";

export default function Section({ title, description, children }) {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
}