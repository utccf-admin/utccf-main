import PersonCard from "../personCard/personCard";
import styles from "./investmentGroup.module.css";
import PdfLink from "../pdfLink/pdfLink";

export default function InvestmentGroup({ ig }) {
  return (
    <div className={styles.inlineBlock}>
      <span className={styles.igName}>{`IG${ig.number}`} / </span>
      <p className={styles.visionButton}>
        <PdfLink fileName={ig.visionFile}>Vision</PdfLink>
      </p>
      <p className={styles.leaders}>Leaders: </p>
      {ig.leaders.map((leader) => (
        <PersonCard key={leader.name} person={leader} />
      ))}
    </div>
  );
}
