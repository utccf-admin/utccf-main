import PersonCard from "../personCard/personCard";
import styles from "./subcommittee.module.css";

export default function Subcommittee({ sc }) {
  return (
    <div className={styles.inlineBlock}>
      <p className={styles.scName}>{sc.name}</p>
      {sc.leaders.length > 0 ? (
        <>
          <p className={styles.leaders}>Leaders: </p>
          {sc.leaders.map((leader) => (
            <PersonCard key={leader.name} person={leader} />
          ))}
        </>
      ) : null}
      <p className={styles.leaders}>Members: </p>
      {sc.members.map((member) => (
        <PersonCard key={member.name} person={member} />
      ))}
    </div>
  );
}
