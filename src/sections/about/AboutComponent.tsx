import React from "react";
import styles from './about.module.css';
import { Image } from '@nextui-org/react'

export default function AboutComponent() {
    return (
        <section className={styles.nosotros} id="nosotros">
            <div className={styles.imgNosotros}>
                <Image src="local.jpg" className={styles.imgLocal} alt="imagen del frente del local" />
            </div>
            <div className={styles.quienesSomos}>
                <h2>Quiénes <span>somos</span></h2>
                <p className="text-left">Somos una empresa dedicada a la reparación de notebooks, PC y consolas en Rosario con una trayectoria de más de 5 años en el rubro. Hemos pasado por varios domicilios, empresas y negocios de forma particular, hoy ponemos nuestro local para que tengas a disposición un taller y un laboratorio de alta complejidad especializado en microelectrónica para que dejes tu equipo en las mejores manos. En Techrevive entendemos la importancia y el valor que tiene en el día a día tu equipo, por ello tenemos como bastión la honestidad, la excelencia y la eficacia para poder brindarte el servicio que merece tu dispositivo.</p>
            </div>
        </section>
    );
}