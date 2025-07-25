import React from "react";
import styles from './footer.module.css';
import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";

export default function FooterComponent() {
    return (
        <footer className={`${styles.footer} bg-secondary`}>
            <div className={styles.container}>
                <div className={styles.techFooter}>
                    <Image src="techrevive.png" alt="logo empresa" className={styles.techrevive} radius='none' />
                </div>
                <div className={styles.info}>
                    <p>Italia 273
                    </p>
                    <a href="https://api.whatsapp.com/send/?phone=3415024695" target="_blank"><p>Tel. 3415024695</p></a>
                    <p>techrevive.informatica@gmail.com</p>
                </div>
                <div className={styles.info}>
                    <a className={styles.redes} href="https://www.instagram.com/techrevive__/" target="_blank">
                        <p>@techrevive__</p>
                        <Image width={50} height={50} src="instagram.png" alt="logo instagram" />
                    </a>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>© 2024 · Techrevive</p>
            </div>
        </footer>
    );
}