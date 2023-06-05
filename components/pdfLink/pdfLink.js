import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./pdfLink.module.css";

export default function PdfLink({ fileName, children }) {
  const openPdf = () => {
    window.open(`docs/2023-24/visions/${fileName}`, "_blank");
  };

  return (
    <button className={styles.pdfLink} onClick={openPdf}>
      <FontAwesomeIcon icon={faFilePdf} />{" "}
      {children}
    </button>
  );
}
