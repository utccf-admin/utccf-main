import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from "./contactButton.module.css";

export default function ContactButton({ type, link }) {
  if (type === "Phone") {
    return (
      <a className={styles.iconLink}>
        <FontAwesomeIcon icon={faPhone} />{" "}
        <span className={styles.littleText}>{link}</span>
      </a>
    );
  }

  function renderIcon(type) {
    if (type === "Instagram") {
      return <FontAwesomeIcon icon={faInstagram} />;
    } else if (type === "Facebook") {
      return <FontAwesomeIcon icon={faFacebook} />;
    } else if (type === "Email") {
      return <FontAwesomeIcon icon={faEnvelope} />;
    }
  }

  return (
    <a className={styles.iconLink} href={link}>
      {renderIcon(type)}
    </a>
  );
}
