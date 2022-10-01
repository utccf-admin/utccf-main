import Section from "../section/section";
import Ministry from "./ministry";

export default function Ministries({ ministries }) {
  return (
    <Section title={ministries.name} description={ministries.description}>
      {ministries.ministries.map((ministry) => (
        <Ministry key={ministry.name} ministry={ministry} />
      ))}
    </Section>
  );
}
