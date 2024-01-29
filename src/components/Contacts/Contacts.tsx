import React from "react";

import { IconSend } from "@tabler/icons-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";

import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <>
      <section>
        <div className={styles.containerBtnContacts}>

          <a
            href="https://mail.google.com/mail/u/0/#trash?compose=DmwnWrRpclcmSGjSqVwhFDrzTHdhRbSMGZggXZgWNfDqhSzCwpvFzQkVDrMZTxClksxLsDVfdslB"
            className={styles.btnContacts}
            target="_blank"
          >
            <IconSend/>
            jhoniermosquera61@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/jhonierdev/"
            className={styles.btnContacts}
            target="_blank"
          >
            <IconBrandLinkedin/>
            Linkedin
          </a>

          <a
            href="https://wa.link/petdon"
            className={styles.btnContacts}
            target="_blank"
          >
            <IconBrandWhatsapp/>
            WhatsApp
          </a>
          
        </div>
      </section>
    </>
  );
};

export default Contacts;
