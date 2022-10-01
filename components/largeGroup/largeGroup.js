import MeetingInfo from "../meetingInfo/meetingInfo";
import Section from "../section/section";

export default function LargeGroup({ largeGroup }) {
  return (
    <Section title="Large Group" description={largeGroup.description}>
      <MeetingInfo meetingInfo={largeGroup.meetingInfo} />
    </Section>
  );
}
