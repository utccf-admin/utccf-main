import CardSkeleton from "../cardSkeleton/cardSkeleton";
import MeetingInfo from "../meetingInfo/meetingInfo";
import Section from "../section/section";

export default function LargeGroup({ largeGroup }) {
  return (
    <Section title="Large Group" description={largeGroup.description}>
      <CardSkeleton visionFile="" name="CCF">
        <MeetingInfo meetingInfo={largeGroup.meetingInfo} />
      </CardSkeleton>
    </Section>
  );
}
