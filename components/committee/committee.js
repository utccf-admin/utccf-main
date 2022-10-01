import Section from "../section/section";
import styles from "./committee.module.css";
import CommitteeMember from "./committeeMember";

export default function Committee({ comm }) {
  return (
    <Section title={comm.name} description={comm.description}>
      {comm.leaders.map((leader) => {
        if (leader.name !== "") {
          return <CommitteeMember key={leader.name} commMember={leader} />;
        }
        return null;
      })}
    </Section>
  );
}
