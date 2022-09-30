import { faSadCry } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./noContactInfo.module.css";

export default function NoContactInfo() {
  return (
    <div className={styles.noContactInfoContainer}>
      <FontAwesomeIcon icon={faSadCry} />{" "}
      <span className={styles.noContactInfoText}>no contact info found!</span>
    </div>
  );
}
