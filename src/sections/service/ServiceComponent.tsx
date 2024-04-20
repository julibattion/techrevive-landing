import React from "react";
import styles from './service.module.css';
import { Image } from '@nextui-org/react'

export default function ServiceComponent() {
    return (
        <div>
             <section className="servicios" id="servicios">

        <div className={styles.nuestrosServicios}>
          <h1>
            Nuestros <span>servicios</span>
          </h1>
        </div>

        <div className={styles.arreglos1} data-aos="zoom-in" data-aos-offset="300" data-aos-duration="400">
          <Image src="display.jpg" alt="cambio de display" />
          <div>
            <p>Si tu pantalla sufrio un golpe, se agrieto, cambia de color, parpadea constantemente o presenta inconvenientes, no te preocupes, hay una solución. Contamos con un equipo especializado y un laboratorio de alta complejidad para realizar con precisión la extracción de tu pantalla dañada y reemplazarla por una completamente nueva. Además, disponemos de repuestos importados y utilizamos exclusivamente piezas originales, asegurando que tu dispositivo recupere su estado original y pueda ofrecerte un rendimiento óptimo a medio y largo plazo.</p>
            <div className={styles.diagnosticos}>
              <a href="https://api.whatsapp.com/send/?phone=3415024695" target="_blank"><Image src="diagnosticos.jpg" alt="diagnosticos sin cargo" /></a>
            </div>
          </div>
        </div>

        <div className={styles.arreglos2} data-aos="zoom-in" data-aos-offset="300" data-aos-duration="400">
          <div>
            <p>¿Sabías que la demora en el encendido de tu equipo, la imposibilidad de abrir más de 3 pestañas de tu navegador sin que se tilde o la lentitud en programas administrativos tiene solución? Muy probablemente tu notebook o PC cuente con buenas prestaciones, pero al no contar con el hardware adecuado rinden al %50 de lo que debería.
              Sacale el %100 del rendimiento a tu equipo con la optimización de hardware: cambios de disco HDD a SSD, ampliación de memoria RAM y otras de las tantas soluciones que ofrecemos en Techrevive para que tu equipo trabaje de manera rápida y opere múltiples tareas sin problema alguno.</p>
            <div className={styles.diagnosticos}>
              <a href="https://api.whatsapp.com/send/?phone=3415024695" target="_blank"><Image src="diagnosticos.jpg" alt="diagnosticos sin cargo" /></a>
            </div>
          </div>
          <Image src="hardware.jpg" alt="optimizacion de hardware" />
        </div>

        <div className={styles.arreglos1} data-aos="zoom-in" data-aos-offset="300" data-aos-duration="400">
          <Image src="placa-madre.jpg" alt="reparacion de placa madre" />
          <div>
            <p>Si tu equipo no volvió a encender, sufrió el derrame de algún líquido o un severo corte de luz, no te precipites a comprar uno nuevo, tiene solución. En Techrevive somos especialistas en la reparación de Notebook, All in One y PC. Contamos con un laboratorio de última tecnología que nos permite realizar cualquier tipo de reparación electrónica en las placas madre y otros componentes.</p>
            <div className={styles.diagnosticos}>
              <a href="https://api.whatsapp.com/send/?phone=3415024695" target="_blank"><Image src="diagnosticos.jpg" alt="diagnosticos sin cargo" /></a>
            </div>
          </div>
        </div>

        <div className={styles.arreglos2} data-aos="zoom-in" data-aos-offset="300" data-aos-duration="400">
          <div>
            <p>Repuestos nuevos y originales. Si tu teclado presenta fallas en varias de sus teclas, sufrió algún derrame de líquido o dejo de funcionar en su totalidad, es normal y parte del uso propio de tu notebook. Llevamos a cabo un proceso de trabajo metódico para este tipo de problemas, ya que exige el desarme total del equipo para realizar el cambio efectivo del teclado.</p>
            <div className={styles.diagnosticos}>
              <a href="https://api.whatsapp.com/send/?phone=3415024695" target="_blank"><Image src="diagnosticos.jpg" alt="diagnosticos sin cargo" /></a>
            </div>
          </div>
          <Image src="teclado.jpg" alt="cambio de teclado" />
        </div>

        <div className={styles.arreglos1} data-aos="zoom-in" data-aos-offset="300" data-aos-duration="400">
          <Image src="bisagras.jpg" alt="cambio de bisagras" />
          <div>
            <p>El problema más frecuente y demandante del service. Las bisagras cuentan con tornillos y soporte en cada uno de sus laterales, los mismos cuentan con una lubricación que se pierde a través del uso. Es importante realizar una reparación inmediata para no perjudicar otros componentes internos del equipo y que la falla sea más grave. Nuestro trabajo  metódico realiza la reparación y lubricación de manera efectiva para que tu equipo pueda seguir siendo utilizado a mediano y largo plazo.</p>
            <div className={styles.diagnosticos}>
              <a href="https://api.whatsapp.com/send/?phone=3415024695" target="_blank"><Image src="diagnosticos.jpg" alt="diagnosticos sin cargo" /></a>
            </div>
          </div>
        </div>

        <div className={styles.arreglos2} data-aos="zoom-in" data-aos-offset="300" data-aos-duration="400">
          <div>
            <p>Contamos con baterías originales y alternativas, internas y externas. Es importante realizarle un cambio de batería a su equipo, ya que al pasar de los meses/años se va deteriorando su uso y produciendo hinchazón en las celdas de la misma. Esto puede causar derrame de líquido (litio) en el interior de su notebook, afectando así a componentes internos del dispositivo, y pudiendo causar hasta cortocircuitos no deseados. Además de los daños que ocasionaría en su laptop, puede afectar a su salud, ya que son propensas a explotar en algunos casos. Contamos con un equipo profesional y capacitado para manipular estos repuestos y brindar alternativas eficientes.</p>
            <div className={styles.diagnosticos}>
              <a href="https://api.whatsapp.com/send/?phone=3415024695" target="_blank"><Image src="diagnosticos.jpg" alt="diagnosticos sin cargo" /></a>
            </div>
          </div>
          <Image src="bateria.jpg" alt="cambio de batería" />
        </div>

      </section>

        </div>
    );
}