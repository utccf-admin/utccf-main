import CardSkeleton from "../cardSkeleton/cardSkeleton";
import PeopleList from "../peopleList/peopleList";
import styles from "./subcommittee.module.css";

export default function Subcommittee({ sc }) {
  return (
    <CardSkeleton name={sc.name} visionFile="">
      {sc.leaders.length > 0 ? (
        <PeopleList people={sc.leaders} title="Leaders" />
      ) : null}
      <PeopleList people={sc.members} title="Members" />
    </CardSkeleton>
  );
}
