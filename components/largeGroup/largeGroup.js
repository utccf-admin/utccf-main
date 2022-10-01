import MeetingInfo from "../meetingInfo/meetingInfo";
import styles from "./largeGroup.module.css";

export default function LargeGroup({ largeGroup }) {
  return (
    <div className={styles.container}>
      <h3>Large Group</h3>
      <p>
        This is the main meeting time for CCF. During large group, we pray,
        worship, conduct bible studies, hear from speakers, and more.
      </p>
      <MeetingInfo meetingInfo={largeGroup.meetingInfo} />
    </div>
  );
}
