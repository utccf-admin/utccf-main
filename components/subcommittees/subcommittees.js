import styles from "./subcommittee.module.css";
import Subcommittee from "./subcommittee";

export default function Subcommittees({ scs }) {
  return (
    <div className={styles.subcommittees}>
      <h3>{scs.name}</h3>
      <p>{scs.description}</p>
      {scs.subcommittees.map((sc) => (
        <Subcommittee key={sc.name} sc={sc} />
      ))}
    </div>
  );
}
