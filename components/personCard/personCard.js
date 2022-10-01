import ContactButton from "../contactButton/contactButton";
import styles from "./personCard.module.css";
import NoContactInfo from "../noContactInfo/noContactInfo";

export default function PersonCard({ person }) {
  const name = person.name;
  const contact = person.contact;

  if (name === "") {
    return null;
  }

  return (
    <div className={styles.card}>
      <p className={styles.nameText}>{name} </p>
      {contact.length != 0
        ? contact.map((contact) => {
            return (
              <ContactButton
                key={contact.link}
                type={contact.type}
                link={contact.link}
              />
            );
          })
        : null}
    </div>
  );
}
