import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lowerCase } from "lodash";
import styles from "./largeGroup.module.css";

export default function LargeGroup({ meetingInfo }) {
  const where = `${meetingInfo.location}`;
  const when = `${lowerCase(meetingInfo.dayOfWeek)}s from ${meetingInfo.time}`;

  return (
    <div className={styles.container}>
      <h2>large group</h2>
      <p>so you want to check out ccf? and you're wondering...</p>
      <p className={styles.description}>
        <FontAwesomeIcon icon={faComment} />
        <span className={styles.bold}> what do? </span>a group of (sometimes)
        from uoft, (sometimes) chinese, (sometimes) christian people who meet to
        study the bible and fellowship with one another.
      </p>
      <p className={styles.description}>
        <FontAwesomeIcon icon={faComment} />
        <span className={styles.bold}> where at? </span>
        in the <span className="funny"> {where}</span>
      </p>
      <p className={styles.description}>
        <FontAwesomeIcon icon={faComment} />{" "}
        <span className={styles.bold}> when at? </span>
        <span className="funny"> (most) </span>
        {when}
      </p>
      <p className={styles.description}>
        <FontAwesomeIcon icon={faComment} />{" "}
        <span className={styles.bold}> and who there? </span> a ton of totally{" "}
        <span className="funny">rad</span> people!
      </p>
    </div>
  );
}
