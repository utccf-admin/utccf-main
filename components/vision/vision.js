import styles from "./vision.module.css";
import PdfLink from "../pdfLink/pdfLink";

export default function Vision({ fileName, children }) {
  if (fileName === "") {
    return;
  }
  return (
    <div className={styles.visionBlock}>
      <PdfLink fileName={fileName}>{children}</PdfLink>
    </div>
  );
}
