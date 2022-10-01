import styles from "./meetingInfo.module.css";

export default function MeetingInfo({ meetingInfo }) {
  return (
    <div className={styles.meetingDiv}>
      <p className={styles.meetingInfo}>
        <span className="fw600">Time:</span> {meetingInfo.dayOfWeek} / {meetingInfo.time}
        <br />
        <span className="fw600">Location:</span> {meetingInfo.location}
      </p>
    </div>
  );
}
