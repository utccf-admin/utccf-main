import MeetingInfo from "../meetingInfo/meetingInfo";
import PdfLink from "../pdfLink/pdfLink";
import PersonCard from "../personCard/personCard";
import styles from "./ministries.module.css";

export default function Ministry({ ministry }) {
  return (
    <div className={styles.inlineBlock}>
      <p className={styles.visionButton}>
        <span className={styles.ministryName}>{ministry.name} / </span>
        <PdfLink fileName={ministry.visionFile}>Vision</PdfLink>
      </p>
      <MeetingInfo meetingInfo={ministry.meetingInfo} />
      <p className={styles.leaders}>Leaders: </p>
      {ministry.leaders.map((leader) => (
        <PersonCard key={leader.name} person={leader} />
      ))}
    </div>
  );
}
