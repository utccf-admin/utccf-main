import ContactButton from "../contactButton/contactButton";
import styles from "./personCard.module.css";
import NoContactInfo from "../noContactInfo/noContactInfo";
import VisionLink from "../visionLink/visionLink";

export default function PersonCard({ position, name, contact, vision }) {
  if (name === "") {
    return null;
  }

  function renderVision() {
    if (vision != null) {
      return (
        <>
          {' '}/ <VisionLink fileName={vision} />
        </>
      );
    } else {
      return null;
    }
  }

  return (
    <div className={styles.card}>
      <p className={styles.nameText}>{name}</p>
      <p className={styles.positionText}>
        {position}
        {renderVision()}
      </p>
      {contact.length != 0 ? (
        contact.map((contact) => {
          return (
            <ContactButton
              key={contact.link}
              type={contact.type}
              link={contact.link}
            />
          );
        })
      ) : (
        <NoContactInfo />
      )}
    </div>
  );
}
