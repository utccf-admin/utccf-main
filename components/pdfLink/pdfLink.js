import styles from "./pdfLink.module.css";

export default function PdfLink({ fileName, children }) {
  const openPdf = () => {
    window.open(`docs/2022-23/visions/${fileName}`, "_blank");
  };

  return (
    <button className={styles.pdfLink} onClick={openPdf}>
      {children}
    </button>
  );
}
