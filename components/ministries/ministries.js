import styles from "./ministries.module.css";
import Ministry from "./ministry";

export default function Ministries({ ministries }) {
  return (
    <div className={styles.ministries}>
      <h3>{ministries.name}</h3>
      <p>{ministries.description}</p>
      {ministries.ministries.map((ministry) => (
        <Ministry key={ministry.name} ministry={ministry} />
      ))}
    </div>
  );
}
