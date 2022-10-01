import ContactButton from "../contactButton/contactButton";
import PdfLink from "../pdfLink/pdfLink";
import styles from "./committee.module.css";

export default function CommitteeMember({ commMember }) {
  return (
    <div className={styles.inlineBlock}>
      <div>
        <span className={styles.commName}>{commMember.name} / </span>
        <p className={styles.visionButton}>
          <PdfLink fileName={commMember.visionFile}>Vision</PdfLink>
        </p>
      </div>
      <p className={styles.positionName}>{commMember.position} </p>
      {commMember.contact.map((c) => (
        <ContactButton type={c.type} link={c.link} />
      ))}
    </div>
  );
}
