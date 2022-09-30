import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      made with react, nextjs, and vercel. view the{" "}
      <span className="funny">source code </span>
      <a href="https://github.com/utccf-admin/utccf-main">here</a>.
    </div>
  );
}
