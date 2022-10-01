import Subcommittee from "./subcommittee";
import Section from "../section/section";

export default function Subcommittees({ scs }) {
  return (
    <Section title={scs.name} description={scs.description}>
      {scs.subcommittees.map((sc) => (
        <Subcommittee key={sc.name} sc={sc} />
      ))}
    </Section>
  );
}
