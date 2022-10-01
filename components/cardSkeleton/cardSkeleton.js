import styles from "./cardSkeleton.module.css";
import Vision from "../vision/vision";

export default function CardSkeleton({
  name,
  visionFile,
  children,
}) {
  return (
    <div className={styles.inlineBlockBordered}>
      <div>
        <span className={styles.cardName}>{name}</span>
        {visionFile.length > 0 ? (
          <Vision fileName={visionFile}>
            Vision
          </Vision>
        ) : null}
      </div>
      {children}
    </div>
  );
}
