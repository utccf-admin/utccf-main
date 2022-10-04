import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.navBar}>
      <a className={styles.navLink} href="#header">
        <FontAwesomeIcon icon={faHome} />
      </a>
      <a className={styles.navLink} href="#ministries">
        Ministries
      </a>
      <a className={styles.navLink} href="#investment-groups">
        Investment Groups
      </a>
      <a className={styles.navLink} href="#subcommittees">
        Subcommittees
      </a>
      <a className={styles.navLink} href="#committee">
        Committee
      </a>
      <a className={styles.navLink} href="#contact-us">
        Contact Us
      </a>
    </nav>
  );
}
