import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from "./contactButton.module.css";

export default function ContactButton({ type, link }) {
  function renderIcon(type) {
    if (type === "Instagram") {
      return <FontAwesomeIcon icon={faInstagram} />;
    } else if (type === "Facebook") {
      return <FontAwesomeIcon icon={faFacebook} />;
    }
  }

  return (
    <a className={styles.iconLink} href={link}>
      {renderIcon(type)}
    </a>
  );
}
