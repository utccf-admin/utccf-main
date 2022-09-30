import styles from "./visionLink.module.css";

export default function VisionLink({ fileName }) {
  const openPdf = () => {
    window.open(`docs/2022-23/${fileName}`, "_blank");
  };

  return (
    <button className={styles.visionLink} onClick={openPdf}>
      Vision
    </button>
  );
}
