import styles from "./committee.module.css";
import CommitteeMember from "./committeeMember";

export default function Committee({ comm }) {
  return (
    <div className={styles.comm}>
      <h3>{comm.name}</h3>
      <p>{comm.description}</p>
      {comm.leaders.map((leader) => {
        if (leader.name !== "") {
          return <CommitteeMember key={leader.name} commMember={leader} />;
        }
        return null;
      })}
    </div>
  );
}
