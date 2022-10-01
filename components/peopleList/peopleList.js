import styles from "./peopleList.module.css";
import PersonCard from "../personCard/personCard";

export default function PeopleList({ people, title }) {
  return (
    <div className="top-border">
      <p className={styles.people}>{title}: </p>
      {people.map((p) => (
        <PersonCard key={p.name} person={p} />
      ))}
    </div>
  );
}
