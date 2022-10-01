import styles from "./investmentGroup.module.css";
import InvestmentGroup from "./investmentGroup";

export default function InvestmentGroups({ igs }) {
  return (
    <div className={styles.igs}>
      <h3>{igs.name}</h3>
      <p>{igs.description}</p>
      {igs.igs.map((ig) => (
        <InvestmentGroup key={ig.number} ig={ig} />
      ))}
    </div>
  );
}
