import PersonCard from "../personCard/personCard";
import styles from "./groupSection.module.css";
import { lowerCase } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";

export default function GroupSection({ group }) {
  const name = lowerCase(group.name);

  function renderMeetingInfo() {
    if (group.meetingInfo) {
      const where = lowerCase(group.meetingInfo.location);
      const when = `${lowerCase(group.meetingInfo.dayOfWeek)}s, from ${
        group.meetingInfo.time
      }`;

      return (
        <>
          <p className={styles.meetingInfo}>
            <span className="funny">where at? </span>
            {where}
          </p>
          <p className={styles.meetingInfo}>
            <span className="funny">when at? </span>
            {when}
          </p>
          <p className={styles.meetingInfo}>
            <span className="funny">who lead? </span>
          </p>
        </>
      );
    } else {
      return <></>;
    }
  }

  return (
    <div className={styles.groupSection}>
      <h2 className={styles.groupName}>
        {name} <FontAwesomeIcon icon={faArrowTurnDown} />
      </h2>
      <p className={styles.groupDescription}>{group.description}</p>
      {group.note ? (
        <p className={styles.smallNote}>note: {group.note}</p>
      ) : null}
      {renderMeetingInfo()}
      {group.leaders.map((leader, idx) => (
        <PersonCard
          key={idx}
          name={leader.name}
          position={leader.position}
          vision={leader.vision ?? null}
          contact={leader.contact}
        />
      ))}
    </div>
  );
}
