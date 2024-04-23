import React from "react";
import styles from './footer.module.css';
import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";

export default function FooterComponent() {
    return (
        <footer className={`${styles.footer} bg-secondary`}>
            <div className={styles.techFooter}>
                <Image src="techrevive.png" alt="logo empresa" className={styles.techrevive} radius='none' />
            </div>
            <hr />
            <div className={styles.info}>
                <p>Paraguay 2215
                </p>
                <p>3415024695</p>
                <p>techrevive.informatica@gmail.com</p>
                <div className={styles.redes}><a href="https://www.instagram.com/techrevive.service/" target="_blank"><Image src="instagram.png" alt="logo instagram" /></a><p>@techrevive.service</p></div>
            </div>
        </footer>
    );
}