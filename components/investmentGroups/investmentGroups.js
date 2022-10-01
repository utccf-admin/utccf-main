import InvestmentGroup from "./investmentGroup";
import Section from "../section/section";

export default function InvestmentGroups({ igs }) {
  return (
    <Section title={igs.name} description={igs.description}>
      {igs.igs.map((ig) => (
        <InvestmentGroup key={ig.number} ig={ig} />
      ))}
    </Section>
  );
}
