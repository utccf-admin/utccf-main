import styles from "./section.module.css";

export default function Section({ title, description, children }) {
  const title_id = title.replace(/\s+/g, '-').toLowerCase();
  console.log(title_id);
  return (
    <section className={styles.section} id={title_id}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <p className={styles.sectionDescription}>{description}</p>
      {children}
    </section>
  );
}
