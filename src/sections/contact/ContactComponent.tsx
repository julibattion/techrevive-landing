import React from "react";
import styles from './contact.module.css';
import FormComponent from "@/sections/contact/FormComponent";

export default function ContactComponent() {
    return (
        <section className={styles.contacto} id="contacto">
            <div className={styles.container}>
                <div className={styles.iframeContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.5691423024623!2d-60.650340725242!3d-32.96238307268196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7abba747e52e1%3A0x831fb2c051968541!2sTechrevive%20-%20Servicios%20Informaticos!5e0!3m2!1ses-419!2sar!4v1705963580049!5m2!1ses-419!2sar"
                        width="600"
                        height="450"
                        style={{ border: "0" }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">

                    </iframe>
                </div>

                <div className={styles.formContainer}>
                    <div className={styles.inputs}>
                        <div className={styles.contactanos}>
                            <h2>Contacto</h2>
                            <p>Contactate con nosotros, dejá tu consulta y/o comentario y te responderemos a la brevedad.</p>
                        </div>

                        <FormComponent />
                    </div>
                </div>
            </div>
        </section>
    );
}