import Head from "next/head";
import GroupSection from "../components/groupSection/groupSection";
import LargeGroup from "../components/largeGroup/largeGroup";
import VisionLink from "../components/visionLink/visionLink";
import info from "../public/docs/2022-23/info.json";
import styles from "../styles/utils.module.css";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>utccf</title>
      </Head>
        <div className={styles.centered}>
          <h1>utccf</h1>
          <p className={styles.bigger}>
            university of toronto{" "}
            <span className="funny">chinese christian fellowship</span>
          </p>
          <p className={styles.description}>
            welcome to the <span className="funny">official</span> utccf website
            for the {info.year} school year.
          </p>
          <p className={styles.description}>
            read our official <VisionLink fileName={info.visionFile} />, titled{" "}
            <span className="funny">{info.visionName}</span>. .
          </p>
          <LargeGroup meetingInfo={info.largeGroupMeetingInfo} />
        </div>
        {info.data.map((ministry) => (
          <GroupSection key={ministry.name} group={ministry} />
        ))}
      <Footer />
    </>
  );
}
