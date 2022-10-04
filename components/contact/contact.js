import ContactButton from "../contactButton/contactButton";
import styles from "./contact.module.css";

export default function Contact({ contacts }) {
  return (
    <section className={styles.centered} id="contact-us">
      <h3 className={styles.contactTitle}>Contact Us</h3>
      <p className={styles.description}>
        We'd love to connect with you. Feel free to message any of the leaders
        on this page or contact us through our social media below.
      </p>
      {contacts.map((c) => (
        <ContactButton type={c.type} link={c.link} />
      ))}
    </section>
  );
}
