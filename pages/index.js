import Head from "next/head";
import LargeGroup from "../components/largeGroup/largeGroup";
import Ministries from "../components/ministries/ministries";
import InvestmentGroups from "../components/investmentGroups/investmentGroups";
import Subcommittees from "../components/subcommittees/subcommittees";
import Committee from "../components/committee/committee";
import PdfLink from "../components/pdfLink/pdfLink";
import styles from "../styles/utils.module.css";
import Footer from "../components/footer/footer";
import largeGroup from "../public/docs/2022-23/info/largeGroup.json";
import ministries from "../public/docs/2022-23/info/ministries.json";
import igs from "../public/docs/2022-23/info/igs.json";
import subcommittees from "../public/docs/2022-23/info/subcommittees.json";
import committee from "../public/docs/2022-23/info/committee.json";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>UTCCF</title>
      </Head>
      <div className={styles.centered}>
        <h1>UTCCF</h1>
        <p className={styles.bigger}>
          University of Toronto Chinese Christian Fellowship
        </p>
        <p className={styles.description}>
          This is the official website for UTCCF, a student-led campus
          fellowship dedicated to strengthening our relationship with God and
          one another in order to make His name known across the broader U of T
          community. You can find a detailed outline of our purpose and
          statement of faith by reading our{" "}
          <PdfLink fileName={"UTCCF-Constitution.pdf"}> constitution</PdfLink>.
        </p>
        <p className={styles.description}>
          To learn more about what we are focusing on this year, read our
          official <PdfLink fileName={largeGroup.visionFile}>vision</PdfLink>,
          titled {largeGroup.visionName}.
        </p>
      </div>
      <LargeGroup largeGroup={largeGroup} />
      <Ministries ministries={ministries} />
      <InvestmentGroups igs={igs} />
      <Subcommittees scs={subcommittees} />
      <Committee comm={committee} />
      <Footer />
    </div>
  );
}
