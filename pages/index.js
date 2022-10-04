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
import contacts from "../public/docs/2022-23/info/contacts.json";
import Image from "next/image";
import Nav from "../components/nav/nav";
import Contact from "../components/contact/contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          UTCCF - University of Toronto Chinese Christian Fellowship
        </title>
      </Head>
      <section className={styles.centered} id="header">
        <div className="margin-top">
          <Image width={150} height={150} src="/images/logolight.png" />
        </div>
        <h1>
          <span className={styles.siteTitle}>UTCCF</span>
        </h1>
        <p className={styles.siteSubtitle}>
          University of Toronto Chinese Christian Fellowship
        </p>
        <div className={styles.animatedLine} />
        <p className={styles.description}>
          This is the official website for UTCCF, a student-led campus
          fellowship dedicated to strengthening our relationship with God and
          one another in order to make His name known across the broader U of T
          community. You can find a detailed outline of our purpose and
          statement of faith by reading our{" "}
          <PdfLink fileName={"UTCCF-Constitution.pdf"}> constitution</PdfLink>.
          <br />
          To learn more about what we are focusing on this year, read our
          official <PdfLink fileName={largeGroup.visionFile}>vision</PdfLink>,
          titled {largeGroup.visionName}.
        </p>
      </section>
      <Nav />
      <LargeGroup largeGroup={largeGroup} />
      <Ministries ministries={ministries} />
      <InvestmentGroups igs={igs} />
      <Subcommittees scs={subcommittees} />
      <Committee comm={committee} />
      <Contact contacts={contacts} />
      <Footer />
    </div>
  );
}
